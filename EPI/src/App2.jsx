import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroEPIs from './components/CadastroEPIs';
import RemoverEPIs from './components/RemoverEPIs';
import RemoverColaborador from './components/RemoverColaborador';
import CadastroColaborador from './components/CadastroColaborador';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Gerenciamento de EPIs e Colaboradores</h1>

        <nav>
          <ul>
            <li><Link to="/">Cadastro de EPIs</Link></li>
            <li><Link to="/remover-epi">Remover EPI</Link></li>
            <li><Link to="/remover-colaborador">Remover Colaborador</Link></li>
            <li><Link to="/cadastrar-colaborador">Cadastro de Colaborador</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CadastroEPIs />} />
          <Route path="/remover-epi" element={<RemoverEPIs />} />
          <Route path="/remover-colaborador" element={<RemoverColaborador />} />
          <Route path="/cadastrar-colaborador" element={<CadastroColaborador />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
