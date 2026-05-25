import { Link } from 'react-router-dom';

const Home = () => (
  <section className="app-panel p-5">
    <p className="text-uppercase text-primary fw-bold mb-2">Laboratorium 10</p>
    <h1 className="display-5 hero-title fw-bold">Autentykacja i autoryzacja</h1>
    <p className="lead text-secondary mb-4">
      Projekt rozwija routing z poprzednich zajec i doklada sesje
      uzytkownika, chronione trasy oraz widok tylko dla roli admin.
    </p>

    <div className="row g-3 mb-4">
      <div className="col-md-4">
        <article className="credential-card h-100 p-3">
          <p className="text-uppercase small text-primary fw-semibold mb-2">
            Krok 1
          </p>
          <h2 className="h5">Logowanie</h2>
          <p className="mb-0 text-secondary">
            Uzupelnij formularz i zapisz sesje po poprawnym logowaniu.
          </p>
        </article>
      </div>
      <div className="col-md-4">
        <article className="credential-card h-100 p-3">
          <p className="text-uppercase small text-primary fw-semibold mb-2">
            Krok 2
          </p>
          <h2 className="h5">ProtectedRoute</h2>
          <p className="mb-0 text-secondary">
            Zablokuj dostep do tras prywatnych bez aktywnej sesji.
          </p>
        </article>
      </div>
      <div className="col-md-4">
        <article className="credential-card h-100 p-3">
          <p className="text-uppercase small text-primary fw-semibold mb-2">
            Krok 3
          </p>
          <h2 className="h5">Role</h2>
          <p className="mb-0 text-secondary">
            Ogranicz panel admina tylko dla roli <code>admin</code>.
          </p>
        </article>
      </div>
    </div>

    <div className="alert alert-info mb-4">
      <p className="mb-2">
        TODO: Odczytaj aktualna sesje z <code>src/services/auth.js</code> i
        pokaz tutaj imie oraz role zalogowanego uzytkownika.
      </p>
      <p className="mb-0">
        Jezeli sesja nie istnieje, wyswietl komunikat zachecajacy do logowania.
      </p>
    </div>

    <div className="d-flex flex-wrap gap-2">
      <Link to="/login" className="btn btn-primary">
        Przejdz do logowania
      </Link>
      <Link to="/posts" className="btn btn-outline-primary">
        Zasob chroniony
      </Link>
      <Link to="/admin" className="btn btn-outline-dark">
        Panel admina
      </Link>
    </div>
  </section>
);

export default Home;
