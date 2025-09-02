import React from "react";
import styles from './ProfileSetupPage.module.css';

const ProfileSetupPage: React.FC<{ onProfileComplete: (nombre: string, empresa: string) => void }> = ({ onProfileComplete }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value;
    const empresa = (form.elements.namedItem("empresa") as HTMLInputElement).value;
    onProfileComplete(nombre, empresa);
  };

  return (
    <div className={styles.bgContainer}>
      <div className={styles.maxWidthMd}>
        <div className={styles.card}>
          <div className={styles.textCenter}>
            <h1 className={styles.title}>Complete su perfil</h1>
            <p className={styles.subtitle}>Necesitamos algunos datos adicionales antes de continuar</p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre" className={styles.label}>Nombre completo</label>
              <input type="text" id="nombre" name="nombre" required className={styles.input} />
            </div>
            <div>
              <label htmlFor="empresa" className={styles.label}>Nombre de la empresa</label>
              <input type="text" id="empresa" name="empresa" required className={styles.input} />
            </div>
            <div>
              <button type="submit" className={styles.button}>
                Guardar y Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetupPage;