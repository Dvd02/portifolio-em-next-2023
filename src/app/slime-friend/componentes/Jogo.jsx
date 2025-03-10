'use client'

import { useEffect, useState } from "react"
import styles from "./styles.module.css"
import Tabuleiro from "./Tabuleiro"


export default function Jogo({mapa}){
    const [direcaoJogador, setDirecaoJogador] = useState('down')
    const [contagemPassos, setContagemPassos] = useState(0)
    const [contagemObjetivos, setContagemObjetivos] = useState(0)
    const [posicaoPlayer, setPosicaoPlayer] = useState(posiciona()) 
    const [posicaoObjtivo, setPosicaoObjetivo] = useState(posiciona())

    function numeroAleatorio(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function blocoValido(posicaoVerical, posicaoHorizontal){
        const blocoResultante = (mapa[posicaoVerical]  ? mapa[posicaoVerical][posicaoHorizontal] : undefined)

        if (blocoResultante == 'g' || blocoResultante == 'G' || blocoResultante == 'b'){
            return true
        }
            return false
    }

    function posiciona(){
        while (true) {
            const novaPosicaoVertical = numeroAleatorio(0, mapa.length-1)
            const novaPosicaoHorizontal = numeroAleatorio(0, mapa.length-1)

            if (blocoValido(novaPosicaoVertical, novaPosicaoHorizontal)){
                return [novaPosicaoVertical, novaPosicaoHorizontal]
            }
        }
    }

    function move(direcao){
        const novaPosicaoPlayer = [...posicaoPlayer]
        switch (direcao) {
            case 'up':
                novaPosicaoPlayer[0] -= 1
                break;
            case 'down':
                novaPosicaoPlayer[0] += 1
                break;
            case 'left':
                novaPosicaoPlayer[1] -= 1
                break;
            case 'right':
                novaPosicaoPlayer[1] += 1
                break;
        }
        setDirecaoJogador(direcao)

        if (blocoValido(novaPosicaoPlayer[0], novaPosicaoPlayer[1])){
            setPosicaoPlayer(novaPosicaoPlayer)
            setContagemPassos(contagemPassos+1)

            if (novaPosicaoPlayer[0] == posicaoObjtivo[0] && novaPosicaoPlayer[1] == posicaoObjtivo[1]){
                setContagemObjetivos(contagemObjetivos+1)
                alert('vc pegou o slime :)')
                setPosicaoObjetivo(posiciona())
            }
        }
    }

    function teclaPresionada(event){
        const tecla = event.key.toUpperCase()
        
        if(tecla == "W" || tecla == "ARROWUP"){
            move('up')

        } else if (tecla == "A" || tecla == "ARROWLEFT"){
            move('left')

        } else if (tecla == "S" || tecla == "ARROWDOWN"){
            move('down')
            
        } else if (tecla == "D"|| tecla == "ARROWRIGHT"){
            move('right')
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown",teclaPresionada)
        return ()=>{
            document.removeEventListener("keydown", teclaPresionada)
        }
    },[posicaoPlayer,teclaPresionada])
 
    return(
        <div className={styles.jogo}>
            <Tabuleiro 
                mapa={mapa} 
                posicaoJogador={posicaoPlayer} 
                posicaoObjtivo={posicaoObjtivo} 
                direcaoJogador={`personagem_${direcaoJogador}`} 
            />

            <div className={styles.console}>
                <p>Contagem de passos: {contagemPassos}</p>
                <p>Slimes pegos: {contagemObjetivos}</p>
            </div>
        </div>
    )

}
