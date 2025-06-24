import React, { useState } from "react";
import "./Chamada.css";
import LogoAC from '../../../assets/LogoAC.png';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Chamada() {
  // Estado para lista de alunos
  const alunos = [
    { nome: "Julia Rita", email: "julia@example.com" },
    { nome: "Heloísa Fernanda", email: "heloisa@example.com" },
    { nome: "Carlos Silva", email: "carlos@example.com" },
    { nome: "Fulano beltrano", email: "fu@exemple.com" },
    { nome: "Fulano beltrano", email: "fu@exemple.com" },
    { nome: "Fulano beltrano", email: "fu@exemple.com" },
  ];

  const [presencas, setPresencas] = useState(alunos.map(() => false));
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const togglePresenca = (index) => {
    const novasPresencas = [...presencas];
    novasPresencas[index] = !novasPresencas[index];
    setPresencas(novasPresencas);
  };

  const handleVisualizarHoras = () => {
    navigate('/VisuHoras');
  };

  const handleMaisHoras = () => {
    navigate('/HorasAdc');
  };
   const handleVisualizarNotas = () => {
    navigate('/VisuNotas');
  };


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
          <h2 className="titulo-chamada">1º ano<br />Chamada</h2>
          <div className="botoes">
            <button onClick={handleVisualizarHoras}>Visualizar Horas</button>
            <button onClick={handleMaisHoras}>+Horas</button>
             <button onClick={handleVisualizarNotas}>+Notas</button>
          </div>
        </div>
        
        <table className="tabela-chamada">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Presença</th>
            </tr>
          </thead>
          <tbody>
           {alunos.map((aluno, index) => (
                <tr key={index} className={index % 2 === 0 ? 'row-light' : 'row-dark'}>
                  <td>{aluno.nome}</td>
                  <td>{aluno.email}</td>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        checked={presencas[index]}
                        onChange={() => togglePresenca(index)}
                      />
                      <span className="falta">falta</span>
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        
        <footer className="rodape">copyright ©2025 AfterClass-AMS</footer>
      </div>
    </div>
  );
}