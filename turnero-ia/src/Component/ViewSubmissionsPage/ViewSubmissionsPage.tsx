import React from "react";
import styles from './ViewSubmissionsPage.module.css';

const ViewSubmissionsPage: React.FC = () => {
  // Aquí puedes cargar y mostrar las solicitudes del usuario
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mis Solicitudes de Turno</h2>
      <div className={styles.list}>
        {/* Aquí renderiza la lista de solicitudes */}
      </div>
    </div>
  );
};

export default ViewSubmissionsPage;