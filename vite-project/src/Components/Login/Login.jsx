import { FaUser, FaLock } from 'react-icons/fa';
import React, { useState } from 'react';
import './Login.css';
import LogoAC from '../../assets/LogoAC.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('aluno'); 

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Login efetuado como ${userType}: ${username} - ${password}`);
    
    if (userType === 'professor') {
      navigate('/Homeprof');
    } else {
      navigate('/Homealuno');
    }
  };

  const toggleUserType = () => {
    setUserType(userType === 'aluno' ? 'professor' : 'aluno');
  };

  return ( 
  <div className='Pag-Login'> 
    <div className='Container-Login'>
      <form onSubmit={handleSubmit}>
        <div className="Logo-container">
          <img src={LogoAC} alt="LogoAC" className="LogoAC" />
        </div>
        <div className='user-type-toggle'>
          <span className={`toggle-label ${userType === 'aluno' ? 'active' : ''}`}>
            Aluno
          </span>
          <div className='toggle-switch' onClick={toggleUserType}>
            <div className={`toggle-slider ${userType === 'professor' ? 'professor' : 'aluno'}`}>
              <div className='toggle-circle'></div>
            </div>
          </div>
          <span className={`toggle-label ${userType === 'professor' ? 'active' : ''}`}>
            Professor
          </span>
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
          <a href='/TrocarSenha'>Esqueceu a senha?</a>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;