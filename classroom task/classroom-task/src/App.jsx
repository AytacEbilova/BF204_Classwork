import React, { useState } from 'react';
import './App.css';
import Login from './Login';       
import Register from './Register'; 
import MainPage from './MainPage'; 

function App() {
  const [form, setForm] = useState("login");  
  const [main, setMain] = useState(null);  
  const [userRole, setUserRole] = useState("student");

  const handleLoginSuccess = (role) => {
    setUserRole(role);
    setForm(null);
    setMain('mainPage');
  };
  const handleRegistration = (role) => {
    setUserRole(role);
    setForm(null);
    setMain('mainPage');
  };

  return (
    <>
      {!main && (
        form === "register" ?
        <Register setForm={setForm} setMain={handleRegistration} /> :
        <Login setForm={setForm} setMain={handleLoginSuccess} setUserRole={setUserRole} />
      )}
      {console.log(userRole)}
      {main === 'mainPage' && <MainPage userRole={userRole}  />}

    </>
  );
}

export default App;
