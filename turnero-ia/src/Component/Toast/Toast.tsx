import React from "react";
import styles from './Toast.module.css';

const getIcon = (type: "success" | "error" | "info") => {
  if (type === "success") return <i className="fas fa-check-circle"></i>;
  if (type === "error") return <i className="fas fa-exclamation-circle"></i>;
  return <i className="fas fa-info-circle"></i>;
};

const Toast: React.FC<{ title: string; message: string; type?: "success" | "error" | "info" }> = ({ title, message, type = "success" }) => {
  return (
    <div className={styles.toast}>
      <div className={`${styles.icon} ${styles[type]}`}>
        {getIcon(type)}
      </div>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default Toast;