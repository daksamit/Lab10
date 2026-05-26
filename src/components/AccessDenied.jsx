import { Link } from 'react-router-dom';

const AccessDenied = () => (
  <section className="app-panel p-5 text-center">
    <p className="display-6 text-warning fw-bold mb-2">403</p>
    <h1 className="h2 mb-3">Brak uprawnień</h1>
    <p className="text-secondary mb-4">
      Jesteś zalogowany, ale Twoja rola nie pozwala otworzyć tego widoku.
    </p>
    <div className="d-flex justify-content-center gap-2">
      <Link to="/" className="btn btn-primary">
        Wróć na start
      </Link>
      <Link to="/about" className="btn btn-outline-primary">
        O aplikacji
      </Link>
    </div>
  </section>
);

export default AccessDenied;
