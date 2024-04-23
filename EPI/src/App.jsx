import React, { useState, useEffect } from 'react';

function App() {
  const [epis, setEpis] = useState([]);
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    fetch('/epis')
      .then(response => response.json())
      .then(data => setEpis(data.epis))
      .catch(error => console.error('Erro ao listar EPIs:', error));

    fetch('/colaboradores/listar')
      .then(response => response.json())
      .then(data => setColaboradores(data.colaboradores))
      .catch(error => console.error('Erro ao listar colaboradores:', error));
  }, []);

  const listarEPIs = () => {
    // ... Função para listar EPIs (mesma lógica do código HTML original)
  };

  const listarColaboradores = () => {
    // ... Função para listar colaboradores (mesma lógica do código HTML original)
  };

  return (
    <div>
      <h1>Listar EPIs</h1>
      <button onClick={listarEPIs}>Listar EPIs</button>

      <h1>Listar Colaboradores</h1>
      <button onClick={listarColaboradores}>Listar Colaboradores</button>

      <div id="resultado"></div>

      {/* Botões para cadastro de EPIs e colaboradores (implementar a lógica React) */}
    </div>
  );
}

export default App;
