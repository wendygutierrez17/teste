import Home from './compoments/Home';
import Sobre from './compoments/Sobre';
import Alunos from './compoments/Alunos';
import {BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
   <h1>Minha Aplicação React</h1>
   <BrowserRouter>

   <Nav variant="tabs">
    <Nav.Link as={Link}to="/">Página Inicial</Nav.Link>
    <Nav.Link as={Link}to="/alunos">Cadastro de Alunos</Nav.Link>
    <Nav.Link as={Link}to="/sobre">Sobre</Nav.Link>
    </Nav>
  

    <Routes>
      <Route path="/" index element={<Home/>}></Route>
      <Route path="/alunos" index element={<Alunos/>}></Route>
      <Route path="/sobre" index element={<Sobre/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
