
import Dados from "../dados/Dados"
import Dropdown from "../dropdown/Dropdown"
import Pesquisa from "../pesquisa/Pesquisa"
import Valores from "../valores/Valores"
import "./snaet.css"

export default function Sneat(){
    return(
        <div className="sneat">
            <Dropdown/>
            <div className="conteiner">
                <Pesquisa/>
                <div className="informacoes">
                    <Dados/>
                    <Valores/>
                </div>
            </div>
        </div>
    )   
}
