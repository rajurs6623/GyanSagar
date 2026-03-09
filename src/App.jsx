import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
