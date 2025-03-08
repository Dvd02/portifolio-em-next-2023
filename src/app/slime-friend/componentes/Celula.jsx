
import styles from "./styles.module.css"

export default function Celula({posicaoBloco, posicaoJogador, posicaoObjtivo, SpritBloco, direcaoJogador}){
    let peronsagem = ''

    if (posicaoJogador[0] == posicaoBloco[0] && posicaoJogador[1] == posicaoBloco[1]){
        peronsagem = <div className={`${styles.celula} ${styles[direcaoJogador]}`}></div>

    } else if (posicaoObjtivo[0] == posicaoBloco[0] && posicaoObjtivo[1] == posicaoBloco[1]){
        peronsagem = <div className={`${styles.celula} ${styles.slime}`}></div>
    }

    return(<>
        <div className={`${styles.celula} ${styles[SpritBloco]}`}>
            {peronsagem}
        </div>
    </>)
}
