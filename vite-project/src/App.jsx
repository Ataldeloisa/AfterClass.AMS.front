import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homeprof from "./Components/Home/Homeprof.jsx";
import CadastroAluno from "./Components/Cadastro/CadastroAluno.jsx";
import Login from "./Components/Login/Login";

function App() {
     return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homeprof" element={<Homeprof/>}/>
        <Route path="/Cadastro" element={<CadastroAluno />} />
      </Routes>
    </Router>
  );
}

export default App;
