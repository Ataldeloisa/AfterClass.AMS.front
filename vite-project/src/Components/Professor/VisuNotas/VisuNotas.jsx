import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import './VisuNotas.css';
import LogoAC from '../../../assets/LogoAC.png';

function VisuNotas() {
  // Estados para controlar os dropdowns
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  // Hook para navegação
  const navigate = useNavigate();

  // Funções para toggle dos menus
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleVisualizarHoras = () => {
    navigate('/VisuHoras');
  };

    const handleVisualizarNotas = () => {
    navigate('/VisuNotas');
  };

  const handleMaisHoras = () => {
    navigate('/HorasAdc');
  };

  return (
    <div className='Nav'>
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo-section">
            <img src={LogoAC} alt="LogoAC" className="LogoAC" />
          </div>
          <nav className="menu">
            <NavLink to="/Homeprof" className={({isActive}) => isActive ? 'active-link' : ''}>
              Home
            </NavLink>
          
            <div className="nav-item">
              <button className="dropbtn" onClick={toggleDropdown}>
                Turma <span className="dropdown-arrow">v</span>
              </button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <NavLink to="/Chamada">1 ANO - AMS</NavLink>
                  <a href="#">2 ANO - AMS</a>
                  <a href="#">3 ANO - AMS</a>
                </div>
              )}
            </div>
            
            <NavLink to="/calendario" className={({isActive}) => isActive ? 'active-link' : ''}>
              Calendário
            </NavLink>
            <NavLink to="/CadastroAluno" className={({isActive}) => isActive ? 'active-link' : ''}>
              Cadastrar
            </NavLink>
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

      <div className="VisuNotas-container">
        <div className="linha-topo">
          <h2 className="titulo-Notas">1º ano<br />Notas</h2>
          <div className="botoes">
            <button onClick={handleVisualizarHoras}>Visualizar Horas</button>
            <button onClick={handleMaisHoras}>+Horas</button>
           <button onClick={handleVisualizarNotas}>+Notas</button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>M1</th>
              <th>M2</th>
              <th>M3</th>
              <th>M4</th>
              <th>MF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Julia Rita</td>
              <td>8,5</td>
              <td>8,5</td>
              <td>8,5</td>
              <td>8,5</td>
              <td>8,5</td>
            </tr>
            <tr>
              <td>Heloísa Fernanda</td>
              <td>8,5</td>
              <td>8,5</td>
              <td>8,5</td>
              <td>8,5</td>
              <td>8,5</td>
            </tr>
          </tbody>
        </table>

        <footer className="footer">
          copyright ©2025 AfterClass-AMS
        </footer>
      </div>
    </div>
  );
}

export default VisuNotas;