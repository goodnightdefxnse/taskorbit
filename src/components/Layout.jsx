import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow p-4 mb-6">
        <div className="max-w-4xl mx-auto flex gap-6">
          <Link to="/" className="text-blue-600 hover:underline">Главная</Link>
          <Link to="/about" className="text-blue-600 hover:underline">О нас</Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};