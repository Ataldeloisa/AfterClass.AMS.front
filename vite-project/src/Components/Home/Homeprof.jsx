import React, { useState } from 'react';
import './HomeProf.css';
import LogoAC from '../../assets/LogoAC.png';
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
      {/* Header */}
      <header className="navbar">
        <div className="logo-section">
                 <img src={LogoAC} alt="LogoAC" className="LogoAC" />
                 </div>
        <nav className="nav-menu">
          <a href="#" className="nav-item active">Home</a>
          <div className="dropdown">
            <button className="nav-item dropbtn" onClick={toggleDropdown}>
              Turma <span className="dropdown-arrow">v</span>
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <a href="#">1 ANO - AMS</a>
                <a href="#">2 ANO - AMS</a>
                <a href="#">3 ANO - AMS</a>
              </div>
            )}
          </div>
          <a href="#" className="nav-item">Calendário</a>
          <a href="#" className="nav-item">Cadastrar</a>
        </nav>
         
        <div className="user-profile">
          <div className="avatar" onClick={toggleUserMenu}>
                    <FaUserCircle size={40} />

          </div>
          {userMenuOpen && (
            <div className="user-menu">
              <div className="menu-header">Email</div>
              <div className="menu-divider"></div>
              <div className="menu-item">Troca de senha</div>
              <div className="menu-divider"></div>
              <div className="menu-item logout">sair</div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content - Dashboard Cards */}
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

      {/* Footer */}
      <footer className="footer">
        <p>copyright ©2025 AfterClass-AMS</p>
      </footer>
    </div>
  );
}

export default Homeprof;