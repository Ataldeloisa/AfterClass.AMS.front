import React, { useState } from 'react';
import './TrocarSenha.css';
import LogoAC from '../../assets/LogoAC.png';
import { useNavigate } from 'react-router-dom';

function TrocarSenha() {
  const navigate = useNavigate();
  const [senhaAtual, setSenhaAtual] = useState('');
  const [senhaNova, setSenhaNova] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (senhaNova !== confirmarSenha) {
      alert('A nova senha e a confirmação não coincidem.');
      return;
    }

    alert('Senha alterada com sucesso!');

    navigate('/');
  };

  return (
    <div className='Pag-Senha'>
      <div className='Container-Senha'>
        <div className="Logo-container">
          <img src={LogoAC} alt="LogoAC" className="LogoAC" />
        </div>
        <h2>Trocar Senha</h2>

        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <input
              type='password'
              placeholder='Senha atual'
              value={senhaAtual}
              onChange={(e) => setSenhaAtual(e.target.value)}
            />
          </div>

          <div className='input-field'>
            <input
              type='password'
              placeholder='Senha nova'
              value={senhaNova}
              onChange={(e) => setSenhaNova(e.target.value)}
            />
          </div>

          <div className='input-field'>
            <input
              type='password'
              placeholder='Confirmar senha'
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          <button type='submit'>Alterar senha</button>
        </form>
      </div>
    </div>
  );
}

export default TrocarSenha;