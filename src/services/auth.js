const STORAGE_KEY = 'lab10-auth-session';

export const getCurrentUser = () => {
  // TODO: Pobierz dane sesji z localStorage pod kluczem STORAGE_KEY.
  // TODO: Jeżeli w localStorage nic nie ma, zwróć null.
  // TODO: Sparsuj JSON i zwróć obiekt sesji.
  // TODO: Zabezpiecz się przed błędem JSON.parse() przez try/catch.
  return null;
};

export const saveCurrentUser = (session) => {
  // TODO: Zapisz session do localStorage za pomocą JSON.stringify().
  void session;
};

export const clearCurrentUser = () => {
  // TODO: Usuń sesję z localStorage.
};

export const getAuthToken = () => {
  const session = getCurrentUser();
  return session?.token ?? '';
};

export const isAuthenticated = () => Boolean(getAuthToken());

export const hasRole = (requiredRole) => {
  if (!requiredRole) {
    return true;
  }

  const session = getCurrentUser();
  return session?.user?.role === requiredRole;
};

export { STORAGE_KEY };
