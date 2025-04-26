import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import LogoAC from '../../assets/LogoAC.png';
import './CadastroAluno.css';
import { NavLink } from 'react-router-dom';


const CadastroAluno = () => {
    const [formData, setFormData] = useState({
      nome: '',
      email: '',
    });
    
    const [mensagem, setMensagem] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.nome || !formData.email) {
          setMensagem('Por favor, preencha todos os campos');
          return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          setMensagem('Por favor, insira um email válido');
          return;
        }
        
        setIsLoading(true);
        
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          setMensagem('Aluno cadastrado com sucesso!');
          setFormData({ nome: '', email: '' });
        } catch (error) {
          console.error('Erro ao cadastrar aluno:', error);
          setMensagem('Erro ao cadastrar aluno. Tente novamente.');
        } finally {
          setIsLoading(false);
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
            <NavLink to="/" end className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
            <NavLink to="/turma" className={({isActive}) => isActive ? 'active-link' : ''}>Turma</NavLink>
            <NavLink to="/calendario" className={({isActive}) => isActive ? 'active-link' : ''}>Calendário</NavLink>
            <NavLink to="/cadastro" className={({isActive}) => isActive ? 'active-link' : ''}>Cadastrar</NavLink>
          </nav>
          <div className="profile-icon">
            <FaUserCircle size={50} />
          </div>
        </div>
      </header>

      <div className="cadastro-background">
        <div className="cadastro-form-overlay">
          <h2>Cadastrar Aluno</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome"
                className="form-input"
              />
            </div>
            
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="form-input"
              />
            </div>
            
            <button 
              type="submit" 
              className="cadastrar-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>
          
          {mensagem && <p className="mensagem">{mensagem}</p>}
          
          <p className="info-text">
            Um email será enviado para o aluno para que ele logue no site e altere a senha padrão
          </p>
        </div>
        
        <footer className="footer">
          <p>Copyright ©2025 AfterClass-AMS</p>
        </footer>
      </div>  
      </div>
    );
}

export default CadastroAluno