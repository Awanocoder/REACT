import React, { useState } from 'react';

function RemoverEPI() {
  const [id, setId] = useState(0);
  const [resultado, setResultado] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`/epis/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        setResultado(data.message);
        event.target.reset(); // Limpa o campo do formulário
      })
      .catch(error => {
        console.error('Erro ao remover EPI:', error);
        setResultado('Erro ao remover EPI. Por favor, tente novamente.');
      });
  };

  return (
    <div>
      <h1>Remover EPI</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" value={id} onChange={(event) => setId(event.target.value)} placeholder="ID do EPI a ser removido" />
        <button type="submit">Remover EPI</button>
      </form>
      <div id="resultado">{resultado}</div>
    </div>
  );
}

export default RemoverEPI;
