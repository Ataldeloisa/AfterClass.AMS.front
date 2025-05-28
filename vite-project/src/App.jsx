import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homeprof from "./Components/Home/Homeprof.jsx";
import CadastroAluno from "./Components/Cadastro/CadastroAluno.jsx";
import Login from "./Components/Login/Login";
import Chamada from "./Components/Chamada/Chamada.jsx";
import HorasAdc from "./Components/HorasAdc/HorasAdc.jsx";
import VisuHoras from "./Components/VisuHoras/VisuHoras.jsx";

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
      </Routes>
    </Router>
  );
  
}

export default App;
