import { Outlet } from 'react-router-dom';

const ProtectedRoute = ({ requiredRole }) => {
  // TODO: Odczytaj aktywną sesję z src/services/auth.js.
  // TODO: Jeśli sesja nie istnieje, przekieruj na "/login" przez <Navigate />
  // i zapisz bieżącą trasę w state={{ from: location }}.
  // TODO: Jeśli requiredRole istnieje i użytkownik nie ma tej roli,
  // przekieruj go na "/forbidden".
  void requiredRole;
  return <Outlet />;
};

export default ProtectedRoute;
