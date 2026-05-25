import { Outlet } from 'react-router-dom';

const ProtectedRoute = ({ requiredRole }) => {
  // TODO: Odczytaj aktywna sesje z src/services/auth.js.
  // TODO: Jesli sesja nie istnieje, przekieruj na "/login" przez <Navigate />
  // i zapisz biezaca trase w state={{ from: location }}.
  // TODO: Jesli requiredRole istnieje i uzytkownik nie ma tej roli,
  // przekieruj go na "/forbidden".
  void requiredRole;
  return <Outlet />;
};

export default ProtectedRoute;
