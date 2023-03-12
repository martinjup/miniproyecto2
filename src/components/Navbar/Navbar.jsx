import './Navbar.css';
import { Link } from 'react-router-dom';
import Search from "../../components/Search/Search"
import { logout } from '../../firebase/auth-service';
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate()
    const handleLogout  = async () => {
        await logout()
          
        .then(() => {
          navigate('/')
            alert('Logout exitoso')
        })
        
        .catch(error)
         alert('Error en autenticacion, intente de nuevo')
        };

    return(
        <div id='Navbar'>
            <Link id='logoutButton' onClick={handleLogout}>Cerrar Sesion</Link>
            <Link id='start' to='/home' className='link'>Inicio</Link>
            <Search/>
        </div>
    );
}