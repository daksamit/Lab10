import { useEffect, useState } from 'react';
import { getAuthToken } from '../services/auth.js';
import PostsTable from './PostsTable.jsx';

const API_URL = 'http://localhost:3001/api/posts';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = getAuthToken();

    fetch(API_URL, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Nie udało się pobrać listy postów. Sprawdź autoryzację.');
        }

        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoaded(true);
      })
      .catch((fetchError) => {
        setError(fetchError);
        setIsLoaded(true);
      });
  }, []);

  return (
    <section className="app-panel p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="mb-1">Lista postów</h2>
          <p className="text-secondary mb-0">
            Endpoint jest chroniony. Po poprawnym logowaniu token powinien trafić
            do nagłówka <code>Authorization</code>.
          </p>
        </div>
      </div>

      {error ? (
        <div className="alert alert-danger">Błąd: {error.message}</div>
      ) : null}

      {!isLoaded ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border" role="status" aria-label="Ładowanie" />
        </div>
      ) : null}

      {isLoaded && !error ? <PostsTable posts={posts} /> : null}
    </section>
  );
};

export default Posts;
