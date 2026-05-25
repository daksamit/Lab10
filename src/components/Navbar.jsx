import { NavLink } from 'react-router-dom';

const getNavClassName = ({ isActive }) =>
  `nav-link${isActive ? ' active fw-semibold text-white' : ' text-white-50'}`;

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div className="container">
      <span className="navbar-brand fw-bold">Lab 10 Auth</span>
      <div className="navbar-nav me-auto">
        <NavLink to="/" className={getNavClassName}>
          Start
        </NavLink>
        <NavLink to="/posts" className={getNavClassName}>
          Posty
        </NavLink>
        {/* TODO: Pokaz link do "/admin" tylko dla roli admin. */}
        <NavLink to="/admin" className={getNavClassName}>
          Admin
        </NavLink>
        <NavLink to="/about" className={getNavClassName}>
          O aplikacji
        </NavLink>
      </div>
      <div className="d-flex align-items-center gap-2">
        {/* TODO: Dla zalogowanego uzytkownika wyswietl imie, role i przycisk Wyloguj. */}
        {/* TODO: Dla niezalogowanego uzytkownika zostaw tylko link do /login. */}
        <span className="badge rounded-pill text-bg-light text-primary">
          TODO: aktywna sesja
        </span>
        <NavLink to="/login" className="btn btn-sm btn-light">
          Logowanie
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
