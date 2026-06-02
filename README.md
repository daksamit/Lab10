# Laboratorium 10 - Autentykacja i autoryzacja w React

To repozytorium jest starterem do ćwiczenia z logowaniem, sesją użytkownika oraz ochroną tras w `react-router-dom`. Routing z `Lab9` jest już przygotowany, a najważniejsze elementy mechanizmu uwierzytelniania zostały zostawione jako `TODO`.

## Cel

Po wykonaniu zadania powinieneś umieć:

- obsłużyć logowanie użytkownika w React
- zapisać sesję w `localStorage`
- odczytać aktywną sesję po odświeżeniu strony
- ograniczyć dostęp do tras przez komponent `ProtectedRoute`
- rozróżnić `401 Unauthorized` i `403 Forbidden`
- ukryć lub pokazać elementy UI zależnie od roli użytkownika
- wylogować użytkownika i wyczyścić sesję

## Wymagania wstępne

Przed rozpoczęciem laboratorium powinieneś rozumieć:

- routing z `Lab9`
- komponenty funkcyjne i hooki `useState`, `useEffect`
- podstawy `fetch()`
- działanie `localStorage`

## Start

```bash
npm install
npm run dev
```

- frontend: `http://localhost:5173`
- mock API: `http://localhost:3001`

## Dane testowe

Użyj jednego z dwóch kont:

- `admin / admin123`
- `student / student123`

## Co masz zrobić

Uzupełnij `TODO` w tych plikach:

- `src/services/auth.js` - odczyt, zapis i usuwanie sesji z `localStorage`
- `src/components/Login.jsx` - obsługa formularza logowania i zapis sesji po sukcesie
- `src/components/ProtectedRoute.jsx` - przekierowanie niezalogowanego użytkownika na `/login` oraz blokada trasy zależnej od roli
- `src/components/Navbar.jsx` - warunkowe linki i przycisk `Wyloguj`
- `src/components/Home.jsx` - wyświetlenie podstawowych informacji o aktualnym użytkowniku

Przeanalizuj dodatkowo:

- `src/components/Posts.jsx` i `src/components/PostDetail.jsx` - w jaki sposób token trafia do nagłówka `Authorization`
- `src/components/AdminPanel.jsx` - jak wygląda widok tylko dla roli `admin`
- `mock-api/server.js` - jak backend rozróżnia `401` i `403`

## Kolejność pracy

1. Uruchom projekt i sprawdź, które widoki działają od razu, a które zwracają `TODO` lub błąd autoryzacji.
2. Zaimplementuj helpery w `src/services/auth.js`.
3. Uzupełnij logowanie w `src/components/Login.jsx`.
4. Dodaj ochronę tras w `src/components/ProtectedRoute.jsx`.
5. Uzupełnij `Navbar.jsx`, aby reagował na stan sesji.
6. Dopracuj `Home.jsx`, aby po zalogowaniu pokazywał dane aktywnego użytkownika.
7. Przetestuj scenariusze dla roli `student` i `admin`.

## Jak sprawdzić wynik

- wejście na `/` bez sesji przekierowuje na `/login`
- poprawne logowanie zapisuje sesję i pozwala wejść do aplikacji
- odświeżenie strony nie wylogowuje użytkownika
- `/posts` oraz `/posts/:id` działają dopiero po poprawnym logowaniu
- rola `student` nie ma dostępu do `/admin`
- rola `admin` ma dostęp do `/admin`
- wylogowanie czyści sesję i blokuje chronione trasy
- błędny adres, np. `/abc`, pokazuje `404`

## API

- `POST /api/login`
- `GET /api/posts`
- `GET /api/posts/:id`
- `GET /api/admin/stats`

## Linki

- [KONSPEKT_10.docx](https://pwsztaredupl-my.sharepoint.com/:w:/g/personal/d_aksamit_atar_edu_pl/IQAOqgM2vKfiQKPqpTijcOs7AYHoUqplQOT5UE7-dPCi3wc?e=upie8j)
- [Przestrzeń OneDrive](https://pwsztaredupl-my.sharepoint.com/:f:/g/personal/d_aksamit_atar_edu_pl/IgBgY_8KvVXIS5T4PcUEnFdLAZBLT9hqNIzcrYvT0jVgbB8?e=nn6RRc) do oddania zadań z laboratorium
