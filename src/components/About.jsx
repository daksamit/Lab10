import { Link } from 'react-router-dom';

const About = () => (
  <section className="app-panel p-4">
    <h2 className="mb-3">O aplikacji</h2>
    <p>
      <strong>Auth Starter</strong> to kontynuacja projektu z routingu w React.
      Celem cwiczenia jest dodanie logowania, sesji uzytkownika oraz ochrony
      widokow.
    </p>
    <p>
      Starter zostal przygotowany jako material do laboratorium z
      programowania reaktywnego.
    </p>
    <div className="d-flex gap-2">
      <Link to="/" className="btn btn-primary">
        Strona glowna
      </Link>
      <Link to="/posts" className="btn btn-outline-primary">
        Lista postow
      </Link>
    </div>
  </section>
);

export default About;
