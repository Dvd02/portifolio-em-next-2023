
import "./pesquisa.css"

export default function Pesquisa(){
    return(
        <div className="pesquisa">
            <div className="pesquisar"></div>
            <input className="input" type="text" placeholder="Search..." />
            <div className="espacamento"></div>
            <button className="contagem-star">⭐ Star</button>
            <button className="contagem-star">47</button>
            <div className="avatar"></div>
        </div>
    )
}
