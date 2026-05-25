const STORAGE_KEY = 'lab10-auth-session';

export const getCurrentUser = () => {
  // TODO: Pobierz dane sesji z localStorage pod kluczem STORAGE_KEY.
  // TODO: Jezeli w localStorage nic nie ma, zwroc null.
  // TODO: Sparsuj JSON i zwroc obiekt sesji.
  // TODO: Zabezpiecz sie przed bledem JSON.parse() przez try/catch.
  return null;
};

export const saveCurrentUser = (session) => {
  // TODO: Zapisz session do localStorage przez JSON.stringify().
  void session;
};

export const clearCurrentUser = () => {
  // TODO: Usun sesje z localStorage.
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
