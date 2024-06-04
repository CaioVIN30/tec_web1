import React, { useState } from "react";

function Novo() {
    return(
        <h2>Novo Contato</h2>
    )
}

const Novo = () => {

    const[nome, setNome] = useState('');
    const[telefone, setTelefone] = useState('');
    const[erroNome, setErroNome] = useState('');
    const[erroTelefone, setErroTelefone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    const novo = {
        nome: nome,
        telefone: telefone,
        };
    }

    return(
        <form onSubmit="handleSubmit()">
            <label htmlFor="nome">Nome:</label>
                <input 
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                {erroNome && <p className="error">{erroNome}</p>}
            <label htmlFor="telefone">Telefone:</label>
                <input 
                    id="telefone"
                    type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                  {erroTelefone && <p className="error">{erroTelefone}</p>}
            <button type="submit">Enviar</button>
        </form>
    )

}

export default Novo