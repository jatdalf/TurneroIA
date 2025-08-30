import React from "react";

const ViewSubmissionsPage: React.FC = () => {
  // Aquí puedes cargar y mostrar las solicitudes del usuario
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Mis Solicitudes de Turno</h2>
      <div className="space-y-6">
        {/* Aquí renderiza la lista de solicitudes */}
      </div>
    </div>
  );
};

export default ViewSubmissionsPage;