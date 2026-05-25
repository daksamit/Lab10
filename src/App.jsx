import { Route, Routes } from 'react-router-dom';
import AccessDenied from './components/AccessDenied.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import NotFound from './components/NotFound.jsx';
import PostDetail from './components/PostDetail.jsx';
import Posts from './components/Posts.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => (
  <>
    <Navbar />
    <main className="container py-4">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/forbidden" element={<AccessDenied />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Route>

        <Route element={<ProtectedRoute requiredRole="admin" />}>
          <Route path="/admin" element={<AdminPanel />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </>
);

export default App;
