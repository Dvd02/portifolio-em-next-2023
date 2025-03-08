
'use client'
import "./style.css"
import { useState } from "react"
import Quadrado from "../quadrado/Quadrado"

export default function Tabuleiro({p1="X", p2="O", vazio=null}){

    const [simbolos] = useState({"vazio": vazio, "p1":p1, "p2":p2})
    const [posicoes, setPosicoes] = useState(Array(9).fill(simbolos.vazio))
    const [simboloAtual, setSimboloAtual] = useState(simbolos.p1)
    const [resultado, setResultado] = useState(`Em jogo (${simboloAtual}).`)

    function mudaSimbolo(){
        if (simboloAtual==simbolos.p1)
            setSimboloAtual(simbolos.p2)
        else {
            setSimboloAtual(simbolos.p1)
        }
    }

    function playerJoga(posicao){
        if (posicoes[posicao] == simbolos.vazio && !(resultado.includes("venceu") || resultado.includes("Empate."))) {
            mudaSimbolo()
            let jogada = posicoes
            jogada[posicao] = simboloAtual
            setPosicoes(jogada)
            atualizaResultado()
        }
    }

    function reiniciaJogo(){
        setPosicoes(Array(9).fill(simbolos.vazio))
        setSimboloAtual(simbolos.p1)
        setResultado(`Em jogo (${simbolos.p1}).`)
    }

    function atualizaResultado(){
        let proximoSimbolo = simboloAtual == simbolos.p1 ? simbolos.p2 : simbolos.p1
        let estadoDoJogo = `Em jogo (${proximoSimbolo}).`

        let possibilidadesDeVitoria = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        let simbolosDosPlayers = [simbolos.p1,simbolos.p2]

        simbolosDosPlayers.forEach(simbolo => {
            possibilidadesDeVitoria.forEach(possibilidade => {
                if (posicoes[possibilidade[0]] == simbolo && posicoes[possibilidade[1]] == simbolo && posicoes[possibilidade[2]] == simbolo){
                    estadoDoJogo = `${simbolo} venceu.`
                }
            });
        });
        
        if((estadoDoJogo.includes("Em jogo")) && (!posicoes.includes(simbolos.vazio))){
            estadoDoJogo = "Empate."
        }

        setResultado(estadoDoJogo)
    }

    return(
        <div className="tabuleiro">
            <div className="linha">
                <Quadrado id="0" valor={posicoes[0]} funcao={playerJoga}/>
                <Quadrado id="1" valor={posicoes[1]} funcao={playerJoga}/>
                <Quadrado id="2" valor={posicoes[2]} funcao={playerJoga}/>
            </div>

            <div className="linha">
                <Quadrado id="3" valor={posicoes[3]} funcao={playerJoga}/>
                <Quadrado id="4" valor={posicoes[4]} funcao={playerJoga}/>
                <Quadrado id="5" valor={posicoes[5]} funcao={playerJoga}/>
            </div>
            
            <div className="linha">
                <Quadrado id="6" valor={posicoes[6]} funcao={playerJoga}/>
                <Quadrado id="7" valor={posicoes[7]} funcao={playerJoga}/>
                <Quadrado id="8" valor={posicoes[8]} funcao={playerJoga}/>
                {/* <button className="quadrado" onClick={()=>{playerJoga(8)}}>{posicoes[8]}</button> */}
            </div>

            <span className="resultado">{resultado}</span>
            <button className="reiniciar" onClick={reiniciaJogo}>Reiniciar</button>
        </div>
    )
}