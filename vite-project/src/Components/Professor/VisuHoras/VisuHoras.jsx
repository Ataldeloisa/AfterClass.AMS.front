import React, { useState } from "react";
import "./VisuHoras.css";
import LogoAC from '../../../assets/LogoAC.png';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

function VisuHoras(){
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  // Sample student data based on the first image
  const studentData = [
    {
      nome: "Julia",
      palestra: 10,
      cursoCurtaDuracao: 0,
      monitoriaETEC: 0,
      monitoriaProgrammers: 7,
      entreOutros: 1,
    },
    {
      nome: "Letícia",
      palestra: 12,
      cursoCurtaDuracao: 4,
      monitoriaETEC: 10,
      monitoriaProgrammers: 10,
      entreOutros: 1,
    }
  ];

  return (
    <div className='Nav'>
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo-section">
            <img src={LogoAC} alt="LogoAC" className="LogoAC" />
          </div>
          <nav className="menu">
            <NavLink to="/Homeprof" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
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

      <div className="chamada-container">
        <div className="linha-topo">
          <h2 className="titulo-chamada">1º ano<br />Visualizar Horas</h2>
          <div className="botoes">
            <button onClick={() => navigate("/HorasAdc")}>+Horas</button>
            <button onClick={() => navigate("/Chamada")}>Chamada</button>
            <button onClick={() => navigate("/VisuNotas")}>+Notas</button>
          </div>
        </div>
        
        <table className="tabela-chamada">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Palestra</th>
              <th>Curso Curta Duração</th>
              <th>Monitoria ETEC</th>
              <th>Monitoria Programmers</th>
              <th>Visitas técnicas, filmes, produções, eventos</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={index} className={index % 2 === 0 ? 'row-light' : 'row-dark'}>
                <td>{student.nome}</td>
                <td>{student.palestra}</td>
                <td>{student.cursoCurtaDuracao}</td>
                <td>{student.monitoriaETEC}</td>
                <td>{student.monitoriaProgrammers}</td>
                <td>{student.entreOutros}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <footer className="rodape">copyright ©2025 AfterClass-AMS</footer>
      </div>
    </div>
  );
}

export default VisuHoras;