import React, { useState } from "react";
import "./Calendário.css";
import LogoAC from '../../../assets/LogoAC.png';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Calendário(){
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [trabalhos, setTrabalhos] = useState([
    'Trabalho para o dia 24/08 - <a href="#">ver mais...</a>'
  ]);
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  
  // Estados que estavam faltando
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const adicionarTrabalho = () => {
    if (descricao && data && hora) {
      const novoTrabalho = `${descricao} para o dia ${data} às ${hora} - <a href="#">ver mais...</a>`;
      setTrabalhos([...trabalhos, novoTrabalho]);
      
      // Limpar campos
      setDescricao('');
      setData('');
      setHora('');
      
      // Esconder formulário
      setMostrarFormulario(false);
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div className='Nav'>
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo-section">
            <img src={LogoAC} alt="LogoAC" className="LogoAC" />
          </div>
          <nav className="menu">
            <NavLink to="/Homeprof" end className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
            <div className="nav-item">
              <button className="dropbtn" onClick={toggleDropdown}>
                Turma <span className="dropdown-arrow">v</span>
              </button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <a href="/Chamada">1 ANO - AMS</a>
                  <a href="#">2 ANO - AMS</a>
                  <a href="#">3 ANO - AMS</a>
                </div>
              )}
            </div>
            
            <NavLink to="/calendario" className={({isActive}) => isActive ? 'active-link' : ''}>Calendário</NavLink>
            <NavLink to="/Cadastro" className={({isActive}) => isActive ? 'active-link' : ''}>Cadastrar</NavLink>
          </nav>
          <div className="profile-icon">
            <div className="avatar" onClick={toggleUserMenu}>
              <FaUserCircle size={40} />
            </div>
            {userMenuOpen && (
              <div className="user-menu">
                                        <div className="menu-divider"></div>
                                        <NavLink to="/TrocarSenha" className="menu-item" onClick={() => setUserMenuOpen(false)}>
                                          Troca de senha
                                        </NavLink>
                                        <div className="menu-divider"></div>
                                        <NavLink to="/" className="menu-item logout" onClick={() => setUserMenuOpen(false)}>
                                          Sair
                                        </NavLink>
                                      </div>
            )}
          </div>
        </div>
      </header>
      
      <main>
        <section className="card">
          <div className="card-header"></div>

          <div className="card-body">
            <h2>Trabalhos</h2>

            <button className="add-button" onClick={toggleFormulario}>+</button>

            {mostrarFormulario && (
              <div className="form-container">
                <input 
                  type="text" 
                  placeholder="Descrição do trabalho" 
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
                <input 
                  type="date" 
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
                <input 
                  type="time" 
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                />
                <button onClick={adicionarTrabalho}>Salvar</button>
              </div>
            )}

            <ul id="lista-trabalhos">
              {trabalhos.map((trabalho, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: trabalho }}></li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <p>copyright ©2025 AfterClass-AMS</p>
      </footer>
    </div>
  );         
}

export default Calendário;