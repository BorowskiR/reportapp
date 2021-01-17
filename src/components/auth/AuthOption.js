import React from 'react';
import { useHistory } from 'react-router-dom';
import './AuthOption.css';

function AuthOption() {
  const history = useHistory();

  const handleRegister = () => history.push('/register');
  const handleLogin = () => history.push('/login');

  return (
    <nav className="auth-options">
      <button onClick={handleRegister}>Rejestracja</button>
      <button onClick={handleLogin}>Zaloguj się</button>
    </nav>
  );
}

export default AuthOption;
