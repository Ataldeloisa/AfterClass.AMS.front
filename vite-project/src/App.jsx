import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homeprof from "./Components/Professor/Home/Homeprof.jsx";
import CadastroAluno from "./Components/Professor/Cadastro/CadastroAluno.jsx";
import Login from "./Components/Login/Login";
import Chamada from "./Components/Professor/Chamada/Chamada.jsx";
import HorasAdc from "./Components/Professor/HorasAdc/HorasAdc.jsx";
import VisuHoras from "./Components/Professor/VisuHoras/VisuHoras.jsx";
import AlunoC from "./Components/Aluno/AlunoC/AlunoC.jsx";
import HomeAluno from "./Components/Aluno/HomeAluno/HomeAluno.jsx";
import VisuNotas from "./Components/Professor/VisuNotas/VisuNotas.jsx";
import Calendário from "./Components/Professor/Calendário/Calendário.jsx";
import CalenderAluno from "./Components/Aluno/CalenderAluno/CalenderAluno.jsx";
import TrocarSenha from "./Components/TrocarSenha/TrocarSenha.jsx";

// const listaDeAlunos = [
//   { nome: "Julia Rita", email: "julia@example.com" },
//   { nome: "Heloísa Fernanda", email: "heloisa@example.com" },
//   { nome: "Carlos Silva", email: "carlos@example.com" },
// ]; /*Esse formato te permite:

// Receber dados da API no futuro.

// Atualizar presença com estado.

// Reutilizar Chamada com qualquer lista de alunos.*/


function App() {
     return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homeprof" element={<Homeprof/>}/>
        <Route path="/Cadastro" element={<CadastroAluno />} />
        <Route path="/Chamada" element={<Chamada />} />
        <Route path ="/HorasAdc" element={<HorasAdc/>} />
        <Route path ="/VisuHoras" element={<VisuHoras/>} />
        <Route path ="/AlunoC" element={<AlunoC/>} />
        <Route path="/HomeAluno" element={<HomeAluno/>}/>
        <Route path="/VisuNotas" element={<VisuNotas/>}/>
        <Route path="/Calendario" element={<Calendário/>}/>
        <Route path="/CalenderAluno" element={<CalenderAluno/>}/>
        <Route path="/TrocarSenha" element={<TrocarSenha/>}/>
      </Routes>
    </Router>
  );
  
}

export default App;
