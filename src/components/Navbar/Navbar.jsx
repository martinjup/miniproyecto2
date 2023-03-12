import './Navbar.css';
import { Link } from 'react-router-dom';
import Search from "../../components/Search/Search"

export default function Navbar(){
    return(
        <div id='Navbar'>
            <Link id='logoutButton'>Cerrar Sesion</Link>
            <Link id='start' to='/home' className='link'>Inicio</Link>
            <Search/>
        </div>
    );
}