import React, { useState } from 'react';

function RemoverColaborador() {
    const [id, setId] = useState(0);
    const [resultado, setResultado] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`/colaboradores/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                setResultado(data.status);
                event.target.reset(); // Limpa o campo do formulário
            })
            .catch(error => {
                console.error('Erro ao remover colaborador:', error);
                setResultado('Erro ao remover colaborador. Por favor, tente novamente.');
            });
    };

    return (
        <div>
            <h1>Remover Colaborador</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" value={id} onChange={(event) => setId(event.target.value)} placeholder="ID do Colaborador a ser removido" />
                <button type="submit">Remover Colaborador</button>
            </form>
            <div id="resultado">{resultado}</div>
        </div>
    );
}

export default RemoverColaborador;
