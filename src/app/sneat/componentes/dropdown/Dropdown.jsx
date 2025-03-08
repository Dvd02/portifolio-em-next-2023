import './dropdown.css'

function Dropdown(){
    return(
        <div className='container'>
            <div className='logo'>
                <div className='imagem logo-sneat'></div> sneat
            </div>

            <div className='itens'>
                <div className='botoes'> <div className='imagem dashboard'></div> Dashboard</div>
                <div className='botoes'> <div className='imagem layout'></div> Layouts</div>
            </div>

            <div className='itens'>
                <label htmlFor="titulo1">PAGES</label>
                <div className='botoes'> <div className='imagem configuracoes-conta'></div> Account Settings</div>
                <div className='botoes'> <div className='imagem autenticacao'></div> Authentications</div>
                <div className='botoes'> <div className='imagem misc'></div> Misc</div>
            </div>

            <div className='itens'>
                <label htmlFor="titulo2">COMPONENTS</label>
                <div className='botoes'> <div className='imagem card'></div> Cards</div>
                <div className='botoes'> <div className='imagem user'></div> User Interface</div>
                <div className='botoes'> <div className='imagem ui'></div> Extended UI</div>
                <div className='botoes'> <div className='imagem boxicons'></div> Boxicons</div>
            </div>
        </div>
    )
}

export default Dropdown;



/*

import './dropdown.css'

function Dropdown(){
    return(
        <div className='container'>
            <div className='logo'>
                <span className='icone sneat'></span> sneat
            </div>

            <div className='itens'>
                <div className='botoes'> <span className='icone sneat'></span> Dashboard</div>
                <div className='botoes'> <span className='icone lyaout'></span> Layouts</div>
            </div>

            <div className='itens'>
                <label htmlFor="titulo1">PAGES</label>
                <div className='botoes'> <span className='icone configuracao-de-conta'></span> Configurações de conta</div>
                <div className='botoes'> <span className='icone autenticacao'></span> Autenticação</div>
                <div className='botoes'> <span className='icone misc'></span> Misc</div>
            </div>

            <div className='itens'>
                <label htmlFor="titulo2">COMPONENTS</label>
                <div className='botoes'> <span className='icone card'></span> Cards</div>
                <div className='botoes'> <span className='icone interface-de-usuario'></span> Interface de usuario</div>
                <div className='botoes'> <span className='icone extender-ui'></span> Extender Ui</div>
                <div className='botoes'> <span className='icone boxicons'></span> Boxicons</div>
            </div>
        </div>
    )
}

export default Dropdown;

*/