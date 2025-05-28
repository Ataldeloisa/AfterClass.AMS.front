import React, { useState } from "react";
import "./HorasAdc.css";
import LogoAC from '../../assets/LogoAC.png';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function HorasAdc() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
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
      mentoria: 72,
      palestra: 10,
      cursoCurtaDuracao: 0,
      monitoriaETEC: 0,
      monitoriaProgrammers: 7,
      entreOutros: 1,
      ano1: 65,
      ano2: 61,
      ano3: 76,
      total: 202
    },
    {
      nome: "Letícia",
      mentoria: 86,
      palestra: 12,
      cursoCurtaDuracao: 4,
      monitoriaETEC: 10,
      monitoriaProgrammers: 10,
      entreOutros: 1,
      ano1: 65,
      ano2: 68,
      ano3: 72,
      total: 205
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
            <NavLink to="/" end className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
            <div className="nav-item">
              <button className="dropbtn" onClick={toggleDropdown}>
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
            
            <NavLink to="/calendario" className={({isActive}) => isActive ? 'active-link' : ''}>Calendário</NavLink>
            <NavLink to="/cadastro" className={({isActive}) => isActive ? 'active-link' : ''}>Cadastrar</NavLink>
          </nav>
          <div className="profile-icon">
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
        </div>
      </header>

      <div className="page-container">
          <div className="linha-topo">
          <h2 className="titulo-Horas">1º ano<br />+Horas</h2>
          <div className="botoes">
            <button onClick={() => window.location.href = "/horas"}>Horas Adicionais</button>
            <button onClick={() => window.location.href = "/mais-horas"}>Chamada</button>
            <button onClick={() => window.location.href = "/notas"}>+Notas</button>
          </div>
        </div>
        
        <div className="tabela-container">
          <table className="tabela-Horas">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Mentoria</th>
                <th>Palestra</th>
                <th>Curso Curta Duração</th>
                <th>Monitoria ETEC</th>
                <th>Monitoria Programmers</th>
                <th>Entre outros</th>
                <th>1 ano</th>
                <th>2 ano</th>
                <th>3 ano</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr key={index} className={index % 2 === 0 ? 'row-light' : 'row-dark'}>
                  <td>{student.nome}</td>
                  <td>{student.mentoria}</td>
                  <td>{student.palestra}</td>
                  <td>{student.cursoCurtaDuracao}</td>
                  <td>{student.monitoriaETEC}</td>
                  <td>{student.monitoriaProgrammers}</td>
                  <td>{student.entreOutros}</td>
                  <td>{student.ano1}</td>
                  <td>{student.ano2}</td>
                  <td>{student.ano3}</td>
                  <td>{student.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HorasAdc;