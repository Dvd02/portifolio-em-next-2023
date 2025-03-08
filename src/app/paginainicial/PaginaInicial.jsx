import styles from './paginainicial.module.scss'
import Projetos from './projetos/Projetos'

export default function PaginaInicial(){
    return(<>
        <div className={styles.paginainicial}>
            <div className={styles.inicio}>
                <p className={styles.textoinicial}>
                    Bem vindo ao meu portifolio de 2023, meu nome é David e aqui voce encontrarar varios de meus projetos 
                    em next, obrigado pela atenção e se divirta :)
                </p>
            </div>

            <p className={styles.meusprojetostitulo}>Meus Projetos</p>

            <div className={styles.meusprojetos}>
                <Projetos link='/sneat' titulo='Dashbord Sneat' imagem='sneat' descricao='Um dashbord basico com poucas interações e sem responsividade'/>
                <Projetos link='/jogo-da-velha' titulo='Jogo da velha' imagem='jogo' descricao='Um simples jogo da velha feito com componentes next'/>
                <Projetos link='/vans' titulo='Vans' imagem='vans' descricao='Um site de vendas responsivo feito com componentes next'/>
                <Projetos link='/slime-friend' titulo='Slime friend' imagem='slime-friend' descricao='Um jogo desenvolvido em next que o objetivo do jogador e chegar ate os slimes'/>
            </div>

            <div className={styles.contato}>
                formas de contato<br/>
                Email: davidluizvinhal2.0@gmail.com
            </div>
        </div>
    </>)
}

