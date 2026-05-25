import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveCurrentUser } from '../services/auth.js';

const API_URL = 'http://localhost:3001/api/login';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    login: 'student',
    password: 'student123',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Nie udalo sie zalogowac.');
      }

      // TODO: Zapisz wynik logowania przez saveCurrentUser(data).
      saveCurrentUser(data);

      // TODO: Po poprawnym logowaniu przekieruj uzytkownika na poprzednia trase
      // z location.state?.from?.pathname albo domyslnie na "/".
      navigate(location.state?.from?.pathname || '/');
    } catch (fetchError) {
      setError(fetchError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="app-panel auth-card p-4 p-md-5">
      <p className="text-uppercase text-primary fw-bold mb-2">Logowanie</p>
      <h1 className="h2 mb-3">Autentykacja uzytkownika</h1>
      <p className="text-secondary mb-4">
        Formularz komunikuje sie z mock API. Po sukcesie powinien zapisac sesje
        i odblokowac trasy chronione.
      </p>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="login" className="form-label">
            Login
          </label>
          <input
            id="login"
            name="login"
            type="text"
            className="form-control"
            value={formData.login}
            onChange={handleChange}
            autoComplete="username"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Haslo
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </div>

        {error ? <div className="alert alert-danger">{error}</div> : null}

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Logowanie...' : 'Zaloguj'}
        </button>
      </form>

      <div className="row g-3">
        <div className="col-md-6">
          <article className="credential-card h-100 p-3">
            <h2 className="h6">Konto student</h2>
            <p className="mb-1">
              login: <code>student</code>
            </p>
            <p className="mb-0">
              haslo: <code>student123</code>
            </p>
          </article>
        </div>
        <div className="col-md-6">
          <article className="credential-card h-100 p-3">
            <h2 className="h6">Konto admin</h2>
            <p className="mb-1">
              login: <code>admin</code>
            </p>
            <p className="mb-0">
              haslo: <code>admin123</code>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Login;
