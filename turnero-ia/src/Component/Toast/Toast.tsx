import React from "react";

const Toast: React.FC<{ title: string; message: string; type?: "success" | "error" | "info" }> = ({ title, message, type = "success" }) => {
  // Puedes manejar la visibilidad y animación con estado
  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 transition-all transform flex items-center">
      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-3">
        {/* Icono según tipo */}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default Toast;