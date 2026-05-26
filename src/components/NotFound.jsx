import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="app-panel p-5 text-center">
    <p className="display-1 text-danger fw-bold mb-0">404</p>
    <h2 className="mb-3">Nie znaleziono takiej strony</h2>
    <p className="text-secondary mb-4">
      Sprawdź adres URL albo wróć do jednej z poprawnych tras aplikacji.
    </p>
    <Link to="/" className="btn btn-primary">
      Wróć na stronę główną
    </Link>
  </section>
);

export default NotFound;
