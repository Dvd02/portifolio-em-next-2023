
import "./dados.css"
import "./parabens.css"
import "./estatisticas.css"

export default function Dados(){
    return(
        <div className="dados">
            <div className="parabens">
                <h2>Parabens Jonh 🎊</h2>
                <p>Você conseguiu 72% de vendas hoje,<br/> olhe o seu perfil</p>
                <button>Ver Perfil</button>
                <div className="imagem"></div>
            </div>

            <div className="estatisticas">
                <h2>Total</h2>
                <div className="grafico"></div>

                <div className="empresa">
                    <form >
                        <select className="escolha-ano">
                            <option value="">2020</option>
                            <option value="">2021</option>
                            <option value="" selected>2022</option>
                            <option value="">2023</option>
                        </select>
                    </form>

                    <div className="gradiente">
                        <div className="porcentagem">
                            <span className="valor">100%</span>
                            <span className="nome">Growth</span>
                        </div>
                    </div>

                    <p className="outra-empresa">62% empresa Growth</p>
                    
                    <div className="dinheiro">
                        <div className="valor reais">
                            <div className="imagem"></div>
                            <p className="dados">
                                <span className="ano">2022</span><br/>
                                <span className="conta">$21.4k</span>
                            </p>
                        </div>

                        <div className="valor credito">
                            <div className="imagem"></div>
                            <p className="dados">
                                <span className="ano">2022</span><br/>
                                <span className="conta">$31.4k</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
