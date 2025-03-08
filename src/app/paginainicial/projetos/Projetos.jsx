
import styles from './projetos.module.scss'

export default function Projetos({link, titulo, imagem, descricao}){
    return(<>
        <div className={styles.projeto}>
            <a className={styles.tituloprojeto} href={link}>
                {titulo}
            </a>
            <div className={`${styles.imagemprojeto} ${styles[imagem]}`} ></div>
            <div className={styles.descricaoprojeto}>
                {descricao}
            </div>
        </div>
    </>)
}
