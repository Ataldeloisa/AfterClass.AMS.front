import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HomeProf.css';
import LogoAC from '../../../assets/LogoAC.png';
import { FaUserCircle } from 'react-icons/fa';

function Homeprof() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <div className="dashboard">
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo-section">
            <img src={LogoAC} alt="LogoAC" className="LogoAC" />
          </div>
          
          <nav className="nav-menu">
            <NavLink to="/Homeprof" className={({isActive}) => isActive ? 'active-link' : ''}>
              Home
            </NavLink>
            
            <div className="dropdown">
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
            
            <NavLink to="/Calendario" className={({isActive}) => isActive ? 'active-link' : ''}>
              Calendário
            </NavLink>
            
            <NavLink to="/Cadastro" className={({isActive}) => isActive ? 'active-link' : ''}>
              Cadastrar
            </NavLink>
          </nav>
          
          <div className="user-profile">
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

      <div className="OlaP">
        <main className="main-content">
          <h1 className="titulo-Proffessor">Olá Professor</h1>
          <p className="email-Professor">Email: Professor@q3awserijomk</p>
        </main>
      </div>
      <main className="dashboard-content">
        <div className="card-container">
          <div className="dashboard-card">
            <h2 className="card-title">Total de alunos</h2>
            <div className="card-value">423</div>
            <div className="card-subtitle">Alunos cadastrados</div>
          </div>

          <div className="dashboard-card">
            <h2 className="card-title">Média de horas</h2>
            <div className="card-value">785</div>
            <div className="card-subtitle">Horas acadêmicas</div>
          </div>

          <div className="dashboard-card">
            <h2 className="card-title">Média de horas</h2>
            <div className="card-value">42.3</div>
            <div className="card-subtitle">Horas complementares</div>
          </div>

          <div className="dashboard-card">
            <h2 className="card-title">Aulas complementares</h2>
            <div className="card-value">35%</div>
            <div className="card-subtitle">Com horas complementares</div>
          </div>
        </div>
      </main>
      <footer className="footerHP">
        <p>copyright ©2025 AfterClass-AMS</p>
      </footer>
    </div>
  );
}

export default Homeprof;