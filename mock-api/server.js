import http from 'node:http';
import { posts } from './posts.js';
import { buildSession, findByCredentials, findByToken } from './users.js';

const PORT = 3001;

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json; charset=utf-8',
  });
  response.end(JSON.stringify(payload));
};

const readJsonBody = (request) =>
  new Promise((resolve, reject) => {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk;
    });

    request.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });

    request.on('error', reject);
  });

const getTokenFromRequest = (request) => {
  const header = request.headers.authorization || '';

  if (!header.startsWith('Bearer ')) {
    return '';
  }

  return header.slice(7);
};

const getSessionFromRequest = (request) => {
  const token = getTokenFromRequest(request);

  if (!token) {
    return null;
  }

  const user = findByToken(token);

  if (!user) {
    return null;
  }

  return buildSession(user);
};

const server = http.createServer((request, response) => {
  const { method } = request;
  const url = new URL(request.url || '/', `http://${request.headers.host}`);
  const { pathname } = url;

  if (method === 'OPTIONS') {
    response.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    });
    response.end();
    return;
  }

  if (method === 'POST' && pathname === '/api/login') {
    readJsonBody(request)
      .then((body) => {
        const user = findByCredentials(body.login, body.password);

        if (!user) {
          sendJson(response, 401, { message: 'Niepoprawny login lub haslo.' });
          return;
        }

        sendJson(response, 200, buildSession(user));
      })
      .catch(() => {
        sendJson(response, 400, { message: 'Niepoprawny format danych.' });
      });
    return;
  }

  if (method === 'GET' && pathname === '/api/posts') {
    const session = getSessionFromRequest(request);

    if (!session) {
      sendJson(response, 401, { message: 'Brak tokenu autoryzacji.' });
      return;
    }

    sendJson(response, 200, posts);
    return;
  }

  if (method === 'GET' && pathname.startsWith('/api/posts/')) {
    const session = getSessionFromRequest(request);

    if (!session) {
      sendJson(response, 401, { message: 'Brak tokenu autoryzacji.' });
      return;
    }

    const id = Number(pathname.split('/').pop());
    const post = posts.find((item) => Number(item.id) === id);

    if (!post) {
      sendJson(response, 404, { message: 'Post nie istnieje' });
      return;
    }

    sendJson(response, 200, post);
    return;
  }

  if (method === 'GET' && pathname === '/api/admin/stats') {
    const session = getSessionFromRequest(request);

    if (!session) {
      sendJson(response, 401, { message: 'Brak tokenu autoryzacji.' });
      return;
    }

    if (session.user.role !== 'admin') {
      sendJson(response, 403, { message: 'Brak uprawnien do panelu admina.' });
      return;
    }

    sendJson(response, 200, {
      usersCount: 2,
      postsCount: posts.length,
      activeRole: session.user.role,
      secretMessage: 'Tylko administrator widzi te dane.',
    });
    return;
  }

  sendJson(response, 404, { message: 'Endpoint nie istnieje' });
});

server.listen(PORT, () => {
  console.log(`Mock API listening on http://localhost:${PORT}`);
});
