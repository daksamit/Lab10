import { useEffect, useState } from 'react';
import { getAuthToken } from '../services/auth.js';

const API_URL = 'http://localhost:3001/api/admin/stats';

const AdminPanel = () => {
  const [stats, setStats] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = getAuthToken();

    fetch(API_URL, {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Nie udało się pobrać danych administratora.');
        }

        return data;
      })
      .then((data) => {
        setStats(data);
        setIsLoaded(true);
      })
      .catch((fetchError) => {
        setError(fetchError);
        setIsLoaded(true);
      });
  }, []);

  return (
    <section className="app-panel p-4">
      <p className="text-uppercase text-primary fw-semibold mb-2">Rola admin</p>
      <h2 className="mb-3">Panel administracyjny</h2>
      <p className="text-secondary">
        Ten widok powinien być dostępny tylko dla użytkownika z rolą
        <code> admin </code>.
      </p>

      {!isLoaded ? (
        <div className="d-flex justify-content-center py-5">
          <div className="spinner-border" role="status" aria-label="Ładowanie" />
        </div>
      ) : null}

      {error ? <div className="alert alert-danger">Błąd: {error.message}</div> : null}

      {isLoaded && stats ? (
        <div className="row g-3">
          <div className="col-md-4">
            <article className="stat-card h-100 p-3">
              <p className="text-secondary mb-1">Liczba użytkowników</p>
              <p className="display-6 mb-0">{stats.usersCount}</p>
            </article>
          </div>
          <div className="col-md-4">
            <article className="stat-card h-100 p-3">
              <p className="text-secondary mb-1">Liczba postów</p>
              <p className="display-6 mb-0">{stats.postsCount}</p>
            </article>
          </div>
          <div className="col-md-4">
            <article className="stat-card h-100 p-3">
              <p className="text-secondary mb-1">Aktywna rola</p>
              <p className="display-6 mb-0">{stats.activeRole}</p>
            </article>
          </div>
          <div className="col-12">
            <div className="alert alert-warning mb-0">{stats.secretMessage}</div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default AdminPanel;
