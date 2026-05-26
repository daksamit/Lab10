import { Link } from 'react-router-dom';

const About = () => (
  <section className="app-panel p-4">
    <h2 className="mb-3">O aplikacji</h2>
    <p>
      <strong>Auth Starter</strong> to kontynuacja projektu z routingu w React.
      Celem ćwiczenia jest dodanie logowania, sesji użytkownika oraz ochrony
      widoków.
    </p>
    <p>
      Starter został przygotowany jako materiał do laboratorium z
      programowania reaktywnego.
    </p>
    <div className="d-flex gap-2">
      <Link to="/" className="btn btn-primary">
        Strona główna
      </Link>
      <Link to="/posts" className="btn btn-outline-primary">
        Lista postów
      </Link>
    </div>
  </section>
);

export default About;
