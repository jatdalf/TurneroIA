import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from './Component/LoguinPage/LoguinPage';
import ProfileSetupPage from './Component/ProfileSetupPage/ProfileSetupPage';
import MainLayout from './Component/MainLayout/MainLayout';
import SubmitTurnPage from './Component/SubmitTurnPage/SubmitTurnPage';
import ViewSubmissionsPage from './Component/ViewSubmissionsPage/ViewSubmissionsPage';
import ProfilePage from './Component/ProfilePage/ProfilePage';

function App() {
  // Estado simple para navegación y usuario (puedes mejorar con context)
  const [user, setUser] = useState<any>(null);
  const [profileComplete, setProfileComplete] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            !user ? (
              <LoginPage onLogin={(email, password) => {
                // Aquí lógica de login, setUser y setProfileComplete
                setUser({ email }); setProfileComplete(false);
              }} />
            ) : !profileComplete ? (
              <ProfileSetupPage onProfileComplete={(nombre, empresa) => {
                // Aquí lógica de completar perfil
                setUser((u: any) => ({ ...u, nombre, empresa }));
                setProfileComplete(true);
              }} />
            ) : (
              <MainLayout onLogout={() => { setUser(null); setProfileComplete(false); }}>
                <SubmitTurnPage onSubmit={() => {}} />
              </MainLayout>
            )
          } />
          <Route path="/submit-turn" element={
            <MainLayout onLogout={() => { setUser(null); setProfileComplete(false); }}>
              <SubmitTurnPage onSubmit={() => {}} />
            </MainLayout>
          } />
          <Route path="/view-submissions" element={
            <MainLayout onLogout={() => { setUser(null); setProfileComplete(false); }}>
              <ViewSubmissionsPage />
            </MainLayout>
          } />
          <Route path="/profile" element={
            <MainLayout onLogout={() => { setUser(null); setProfileComplete(false); }}>
              <ProfilePage user={user} onSave={() => {}} />
            </MainLayout>
          } />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;