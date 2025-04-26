import { FaUser, FaLock } from 'react-icons/fa';
import React, { useState } from 'react';
import './Login.css';
import LogoAC from '../../assets/LogoAC.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    alert('Login efetuado com: ' + username + ' - ' + password);
    
    navigate('/Homeprof');
  };

  return ( 
  <div className='Pag'> 
    <div className='Container'>
      <form onSubmit={handleSubmit}>
        <div className="Logo-container">
          <img src={LogoAC} alt="LogoAC" className="LogoAC" />
        </div>
        <div className='input-field'>
          <input
            type='email'
            placeholder='E-mail'
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className='icon' />
        </div>
        <div className='input-field'>
          <input
            type='password'
            placeholder='Senha'
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className='icon' />
        </div>

        <div className='recall-forgot'>
          <label>
            <input type='checkbox' />
            Lembrar-me
          </label>
        </div>
        <button type='submit'>Entrar</button>
        <div className='Re-senha'>
          <a href='#'>Esqueceu a senha?</a>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;

