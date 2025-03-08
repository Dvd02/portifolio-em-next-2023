
import Contagem from "../contagem/Contagem"
import "./valores.css"

export default function Valores(){
    return(
        <div className="valores">
            <div className="linha">   
                <Contagem nome="perfil" valor={12628}/>
                <Contagem nome="vendas" valor={4679}/>
            </div>
            
            <div className="linha">    
                <Contagem nome="pix" valor={2456}/>
                <Contagem nome="transacoes" valor={14857}/>
            </div>
            
            <div className="profile-reporter">
                <div className="imagem"></div>
                <h3 className="titulo">Profile Reporter</h3>
                <p className="ano">YEAR 2021</p>
                <p className="rendimento">+68.2%</p>
                <h2 className="valor">$84.686K</h2>
            </div>
        </div>
    )
}
