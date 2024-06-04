import './Navbar.css'
import { NavLink } from "react-router-dom"

function Navbar () {
    return(
        <ul>
            <li>
                <NavLink to="/">Meus Contatos</NavLink>
            </li>
            <li>
                <NavLink to="/novo">Novo Contato</NavLink>
            </li>
        </ul>
    )
}

export default Navbar
