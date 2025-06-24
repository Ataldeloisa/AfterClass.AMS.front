import React, { useState } from "react";
import "./HomeAluno.css";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import LogoAC from '../../../assets/LogoAC.png';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

// Dados e cores para o gráfico
const chartData = [
  { name: "Horas Necessárias", value: 200 },
  { name: "Horas Acumuladas", value: 16 },
];

const COLORS = ["#8884d8", "#82ca9d"];

// Componente de gráfico
function ChartPieLegend() {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

// Componente principal
export default function HomeAluno() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  return (
    <div className='Nav'>
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

      <div className="HomeAluno-background">
        <main className="main-content">
          <h1 className="titulo-aluno">Olá Aluno</h1>
          <p className="email-aluno">Email: Aluno@q3awserdtfyguhijomk</p>
        </main>
        
        <div className="grafico-wrapper">
          <div className="texto-horas">
            <strong>Total de Horas</strong>
            <strong>acumuladas:</strong>
          </div>
          <ChartPieLegend />
        </div>
      </div>
    </div>
  );
}