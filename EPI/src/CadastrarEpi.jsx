import React, { useState } from 'react';

function CadastroEPIs() {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [codigo, setCodigo] = useState('');
    const [resultado, setResultado] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const dados = {
            nome,
            quantidade,
            codigo
        };

        fetch('/epis', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
            .then(response => response.json())
            .then(data => {
                setResultado(data.message);
                event.target.reset(); // Limpa os campos do formulário
            })
            .catch(error => {
                console.error('Erro ao cadastrar EPI:', error);
                setResultado('Erro ao cadastrar EPI. Por favor, tente novamente.');
            });
    };

    return (
        <div>
            <h1>Cadastro de EPIs</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} placeholder="Nome do EPI" />
                <input type="number" value={quantidade} onChange={(event) => setQuantidade(event.target.value)} placeholder="Quantidade" />
                <input type="text" value={codigo} onChange={(event) => setCodigo(event.target.value)} placeholder="Código" />
                <button type="submit">Cadastrar EPI</button>
            </form>
            <div id="resultado">{resultado}</div>
        </div>
    );
}

export default CadastroEPIs;
