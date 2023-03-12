import Styles from './Navbar.css';
import { Link } from 'react-router-dom';
import Search from "../../components/Search/Search"

export default function Navbar(){
    return(
        <div id='Navbar'>
            <Link id='start' to='/' className='link'>Inicio</Link>
            <Search/>
            
        </div>
    );
}