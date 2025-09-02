import React from "react";
import styles from './ProfilePage.module.css';

const ProfilePage: React.FC<{ user: any; onSave: (data: any) => void }> = ({ user, onSave }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value;
    const empresa = (form.elements.namedItem("empresa") as HTMLInputElement).value;
    onSave({ nombre, empresa });
  };

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.title}>Mi Perfil</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="profile-nombre" className={styles.label}>Nombre completo</label>
          <input
            type="text"
            id="profile-nombre"
            name="nombre"
            required
            className={styles.input}
            defaultValue={user?.nombre || ""}
          />
        </div>
        <div>
          <label htmlFor="profile-empresa" className={styles.label}>Nombre de la empresa</label>
          <input
            type="text"
            id="profile-empresa"
            name="empresa"
            required
            className={styles.input}
            defaultValue={user?.empresa || ""}
          />
        </div>
        <div>
          <label htmlFor="profile-email" className={styles.label}>Correo electrónico</label>
          <input
            type="email"
            id="profile-email"
            name="email"
            disabled
            className={styles.input}
            defaultValue={user?.email || ""}
          />
        </div>
        <div>
          <button type="submit" className={styles.button}>
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;