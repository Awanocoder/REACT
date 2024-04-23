import React, { useState } from 'react';

function CadastroColaborador() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [setor, setSetor] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const dados = {
      nome,
      cargo,
      setor
    };

    fetch('/colaboradores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
      .then(response => response.json())
      .then(data => {
        setResultado(data.status);
        event.target.reset(); // Limpa os campos do formulário
      })
      .catch(error => {
        console.error('Erro ao cadastrar colaborador:', error);
        setResultado('Erro ao cadastrar colaborador. Por favor, tente novamente.');
      });
  };

  return (
    <div>
      <h1>Cadastro de Colaboradores</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} placeholder="Nome do Colaborador" />
        <input type="text" value={cargo} onChange={(event) => setCargo(event.target.value)} placeholder="Cargo" />
        <input type="text" value={setor} onChange={(event) => setSetor(event.target.value)} placeholder="Setor" />
        <button type="submit">Cadastrar Colaborador</button>
      </form>
      <div id="resultado">{resultado}</div>
    </div>
  );
}

export default CadastroColaborador;
