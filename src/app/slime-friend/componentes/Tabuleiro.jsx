'use client'

import Celula from "./Celula"
import styles from "./styles.module.css"

export default function Tabuleiro({mapa, posicaoJogador, posicaoObjtivo, direcaoJogador}){
    return(<>
        <div className={styles.tabuleiro}>
            {mapa.map((linha, i)=>{
                const listaDasColunas = linha.map((coluna, j)=>{
                    return <Celula
                        posicaoBloco={[i, j]}
                        posicaoJogador={posicaoJogador}
                        posicaoObjtivo={posicaoObjtivo}
                        SpritBloco={coluna}
                        direcaoJogador={direcaoJogador}
                        key={`Linha:${i};Coluna:${j}`}
                    />
                })
                return (    
                    <div className={styles.linha} key={`Linha:${i}`}>
                        {listaDasColunas}
                    </div>
                )
            })}
        </div>
    </>)
}
