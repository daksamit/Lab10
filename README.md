# Laboratorium 10 - Autentykacja i autoryzacja w React

To repo jest starterem do cwiczenia z logowaniem, sesja uzytkownika oraz ochrona tras w `react-router-dom`. Routing z `Lab9` jest juz przygotowany, a najwazniejsze elementy mechanizmu auth zostaly zostawione jako `TODO`.

## Cel

Po wykonaniu zadania powinienes umiec:

- obsluzyc logowanie uzytkownika w React
- zapisac sesje w `localStorage`
- odczytac aktywna sesje po odswiezeniu strony
- ograniczyc dostep do tras przez komponent `ProtectedRoute`
- rozroznic `401 Unauthorized` i `403 Forbidden`
- ukryc lub pokazac elementy UI zaleznie od roli uzytkownika
- wylogowac uzytkownika i wyczyscic sesje

## Wymagania wstepne

Przed rozpoczeciem laboratorium powinienes rozumiec:

- routing z `Lab9`
- komponenty funkcyjne i hooki `useState`, `useEffect`
- podstawy `fetch()`
- dzialanie `localStorage`

## Start

```bash
npm install
npm run dev
```

- frontend: `http://localhost:5173`
- mock API: `http://localhost:3001`

## Dane testowe

Uzyj jednego z dwoch kont:

- `admin / admin123`
- `student / student123`

## Co masz zrobic

Uzupelnij `TODO` w tych plikach:

- `src/services/auth.js` - odczyt, zapis i usuwanie sesji z `localStorage`
- `src/components/Login.jsx` - obsluga formularza logowania i zapis sesji po sukcesie
- `src/components/ProtectedRoute.jsx` - przekierowanie niezalogowanego uzytkownika na `/login` oraz blokada trasy rolowej
- `src/components/Navbar.jsx` - warunkowe linki i przycisk `Wyloguj`
- `src/components/Home.jsx` - wyswietlenie podstawowych informacji o aktualnym uzytkowniku

Przeanalizuj dodatkowo:

- `src/components/Posts.jsx` i `src/components/PostDetail.jsx` - w jaki sposob token trafia do naglowka `Authorization`
- `src/components/AdminPanel.jsx` - jak wyglada widok tylko dla roli `admin`
- `mock-api/server.js` - jak backend rozroznia `401` i `403`

## Kolejnosc pracy

1. Uruchom projekt i sprawdz, ktore widoki dzialaja od razu, a ktore zwracaja `TODO` lub blad autoryzacji.
2. Zaimplementuj helpery w `src/services/auth.js`.
3. Uzupelnij logowanie w `src/components/Login.jsx`.
4. Dodaj ochrone tras w `src/components/ProtectedRoute.jsx`.
5. Uzupelnij `Navbar.jsx`, aby reagowal na stan sesji.
6. Dopracuj `Home.jsx`, aby po zalogowaniu pokazywal dane aktywnego uzytkownika.
7. Przetestuj scenariusze dla roli `student` i `admin`.

## Jak sprawdzic wynik

- wejscie na `/` bez sesji przekierowuje na `/login`
- poprawne logowanie zapisuje sesje i pozwala wejsc do aplikacji
- odswiezenie strony nie wylogowuje uzytkownika
- `/posts` oraz `/posts/:id` dzialaja dopiero po poprawnym logowaniu
- rola `student` nie ma dostepu do `/admin`
- rola `admin` ma dostep do `/admin`
- wylogowanie czysci sesje i blokuje chronione trasy
- bledny adres, np. `/abc`, pokazuje `404`

## API

- `POST /api/login`
- `GET /api/posts`
- `GET /api/posts/:id`
- `GET /api/admin/stats`

## Material dla prowadzacego

- [KONSPEKT_10.md](./KONSPEKT_10.md)
