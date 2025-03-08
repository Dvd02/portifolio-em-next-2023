
import "./style.css"

export default function Quadrado({id, valor, funcao}){
    return(
        <button onClick={()=>{funcao(id)}} className="quadrado">{valor}</button>
    )
}
