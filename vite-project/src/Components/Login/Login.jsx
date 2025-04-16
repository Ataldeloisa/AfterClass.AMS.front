import {FaUser,FaLock} from 'react-icons/fa';
import React, { useState } from 'react';
import "./Login.css";
import LogoAC from '../../assets/LogoAC.png';

function Login() {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();

    alert("Enviando dados:"+username+ "-" +password);
  };

  return (
      <div className='Container'>
        <form onSubmit={handleSubmit}>
        <div className="Logo-container">
        <img src={LogoAC} alt="LogoAC" className="LogoAC" />
      </div>
            <div className='input-field'>
            <input type='E-mail' placeholder='E-mail' onChange={(e)=> setUsername(e.target.value)}></input>
            <FaUser className='icon'></FaUser>
            </div>
           <div className='input-field'>
           <input type='password' placeholder='Senha'onChange={(e)=>setPassword(e.target.value)}></input>
           <FaLock className='icon'></FaLock>
           </div>

           <div className='recall-forgot'>
            <label>
              <input type="checkbox" />
              Lembrar-me
            </label>
            
           
           </div>
           <button>Entrar</button>
           <div className='Re-senha'>
           <a href='a'> Esqueceu a senha? </a>
           </div>
          
        </form>
      </div>
  )
}

export default Login
