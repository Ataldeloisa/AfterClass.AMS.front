import React, { useState } from "react";
import "./AlunoC.css";
import LogoAC from '../../../assets/LogoAC.png';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function HorasAdc() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const studentData = [
    {
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
  ];

  return (
    <div className="Nav">
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo-section">
            <img src={LogoAC} alt="LogoAC" className="LogoAC" />
          </div>
          <nav className="menu">
            <NavLink to="/HomeAluno" end className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
            <NavLink to="/CalenderAluno" className={({ isActive }) => isActive ? 'active-link' : ''}>Calendário</NavLink>
            <NavLink to="/AlunoC" className={({ isActive }) => isActive ? 'active-link' : ''}>Notas e Horas</NavLink>
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

      <main className="page-container">
        <div className="tabelas-container">
          <div className="linha-topoA">
            <h2 className="titulo-HorasA">Horas</h2>
          </div>

          <div className="tabela-container">
            <table className="tabela-HorasA">
              <thead>
                <tr>
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
                  <tr key={index}>
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

          <div className="linha-topoNotas">
            <h2 className="titulo-Notas">Notas</h2>
          </div>

          <div className="notas-box">
            <table className="notas-tabela">
              <thead>
                <tr>
                  <th>M1</th>
                  <th>M2</th>
                  <th>M3</th>
                  <th>M4</th>
                  <th>MF</th>
                  <th>Ano</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
                  <td>
                    <select className="ano-select">
                      <option>1 ANO - AMS</option>
                      <option>2 ANO - AMS</option>
                      <option>3 ANO - AMS</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HorasAdc;
