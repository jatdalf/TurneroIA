import React from "react";
import styles from './SubmitTurnPage.module.css';

const SubmitTurnPage: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
  // Aquí puedes agregar el manejo de archivos y lógica de formulario
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Solicitar Turno de Entrega</h2>
      <form className={styles.form} onSubmit={e => { e.preventDefault(); /* Lógica aquí */ }}>
        {/* Ejemplo de campos */}
        <div>
          <label htmlFor="order-number" className={styles.label}>Número de Orden de Compra</label>
          <input type="text" id="order-number" name="orderNumber" required className={styles.input} />
        </div>
        <div>
          <label htmlFor="volume" className={styles.label}>Volumen del Material (m³)</label>
          <input type="number" id="volume" name="volume" min="0.01" step="0.01" required className={styles.input} />
        </div>
        {/* Puedes agregar aquí el manejo de archivos y otros campos */}
        <div>
          <button type="submit" className={styles.button}>
            Enviar Solicitud
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitTurnPage;