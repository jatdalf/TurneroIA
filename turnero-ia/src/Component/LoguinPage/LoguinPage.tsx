import React from "react";
import styles from './LoguinPage.module.css';

const LoginPage: React.FC<{ onLogin: (email: string, password: string) => void }> = ({ onLogin }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    onLogin(email, password);
  };

  return (
    <div className={styles.loginBg}>
    <div className={styles.maxWidthMd}>
        <div className={styles.authForm}>
        <div className={styles.textCenter}>
            <h1 className={styles.title}>Sistema de Turnos</h1>
            <p className={styles.subtitle}>Inicie sesión para gestionar sus entregas</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email" className={styles.label}>Correo electrónico</label>
            <input type="email" id="email" name="email" required className={styles.input} />
            </div>
            <div>
            <label htmlFor="password" className={styles.label}>Contraseña</label>
            <input type="password" id="password" name="password" required className={styles.input} />
            </div>
            <div>
            <button type="submit" className={styles.button}>
                Iniciar Sesión
            </button>
            </div>
        </form>
        </div>
    </div>
    </div>
  );
};

export default LoginPage;