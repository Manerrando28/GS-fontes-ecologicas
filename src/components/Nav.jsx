import { Link } from "react-router-dom"
import { NavStyle } from "../style/NavStyle.jsx"

const Nav = () => {

    return(
        <NavStyle>
        <header>
            <div className="nav">
                <h1>Fontes Energeticas</h1>
                <ul>
                    
                    <Link to = '/' >Home</Link>
                    <Link to = '/Login'>Login</Link>
                    <Link to = '/Produtos'>tipos</Link>
                    <Link to = '/Sobre'>Sobre</Link>
                    <Link to = '/Contato'>Contato</Link>
                   
                </ul>
            </div>
        </header>
        </NavStyle>
    )
}

export default Nav