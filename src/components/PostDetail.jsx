import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAuthToken } from '../services/auth.js';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = getAuthToken();

    fetch(`http://localhost:3001/api/posts/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Nie udało się pobrać szczegółów posta.');
        }

        return data;
      })
      .then((data) => {
        setPost(data);
        setIsLoaded(true);
      })
      .catch((fetchError) => {
        setError(fetchError);
        setIsLoaded(true);
      });
  }, [id]);

  return (
    <article className="app-panel p-4">
      <p className="text-uppercase text-primary fw-semibold mb-2">
        Widok szczegółów
      </p>
      <h2 className="mb-3">Post #{id}</h2>

      {!isLoaded ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border" role="status" aria-label="Ładowanie" />
        </div>
      ) : null}

      {error ? <div className="alert alert-danger">Błąd: {error.message}</div> : null}

      {isLoaded && post ? (
        <>
          <div className="mb-4">
            <h3 className="h4">{post.title}</h3>
            <p className="text-secondary mb-0">{post.text}</p>
          </div>
          <div className="alert alert-light border">
            Ten widok też korzysta z zasobu chronionego i wymaga tokenu w
            nagłówku <code>Authorization</code>.
          </div>
        </>
      ) : null}

      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => navigate('/posts')}
      >
        Wróć do listy
      </button>
    </article>
  );
};

export default PostDetail;
