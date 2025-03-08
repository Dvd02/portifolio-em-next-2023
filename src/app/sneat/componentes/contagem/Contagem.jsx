'use client'

import { useState } from "react";
import './contagem.css'

export default function Contagem(props){
    
    const [valorBase, setValorBase] = useState(props.valor)
    const [valor, setValor] = useState(props.valor)
    const [porcentagem, setPorcentagem] = useState(0)
    
    function handler(){
        setValor(valor + 1)
        setPorcentagem(((valor / valorBase * 100) - 100).toFixed(2))
    }

    return(<>
        <div className="contagem" onClick={handler}>
            <div className="imagem" id={props.nome}></div>
            <div className="configuracoes"></div>
            <p className="tipo">{props.nome}</p>
            <h2 className="valor">${valor}</h2>
            <p className="rendimento">+{porcentagem}%</p>
        </div>
    </>);
}