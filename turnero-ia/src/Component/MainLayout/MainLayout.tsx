import React from "react";

const MainLayout: React.FC<{
  onLogout: () => void;
  children: React.ReactNode;
}> = ({ onLogout, children }) => (
  <div className="min-h-screen flex flex-col">
    {/* Header */}
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-indigo-800">Sistema de Turnos</h1>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-6">
            {/* Aquí puedes usar NavLink de react-router-dom */}
            <a href="#" className="nav-link" data-page="submit-turn">Solicitar Turno</a>
            <a href="#" className="nav-link" data-page="view-submissions">Ver Solicitudes</a>
            <a href="#" className="nav-link" data-page="profile">Perfil</a>
            <a href="#" onClick={onLogout} className="text-red-600">Cerrar Sesión</a>
          </nav>
          {/* Mobile Menu Button */}
          <button className="sm:hidden text-gray-600">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>
    {/* Main Content */}
    <main className="flex-grow container mx-auto px-4 py-6">
      {children}
    </main>
    {/* Footer */}
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>Sistema de Turnos para Proveedores &copy; 2025</p>
      </div>
    </footer>
  </div>
);

export default MainLayout;