import React from "react";
import styles from './MainLayout.module.css';

const MainLayout: React.FC<{
  onLogout: () => void;
  children: React.ReactNode;
}> = ({ onLogout, children }) => (
  <div className={styles.mainLayout}>
    {/* Header */}
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.logo}>
            Sistema de Turnos
          </div>
          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink} data-page="submit-turn">Solicitar Turno</a>
            <a href="#" className={styles.navLink} data-page="view-submissions">Ver Solicitudes</a>
            <a href="#" className={styles.navLink} data-page="profile">Perfil</a>
            <span onClick={onLogout} className={styles.logout}>Cerrar Sesión</span>
          </nav>
          {/* Mobile Menu Button */}
          <button className={styles.mobileMenuBtn}>
            <i className="fas fa-bars" style={{ fontSize: "1.25rem" }}></i>
          </button>
        </div>
      </div>
    </header>
    {/* Main Content */}
    <main className={styles.mainContent}>
      {children}
    </main>
    {/* Footer */}
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.footerText}>Sistema de Turnos para Proveedores &copy; 2025</p>
      </div>
    </footer>
  </div>
);

export default MainLayout;