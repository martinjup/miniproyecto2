import styles from './Register.css';
import { Link } from 'react-router-dom';
import Facebook__logo from '../../img/Facebook-logo.png';
import Google__logo from '../../img/Google-logo.png';
import Privacy from '../../img/Privacy-policy-logo.png';

export function Register(){
    return(
        <div> 
            <div id='header'>
                <p>.</p>
            </div>
            <div className='headerText'>
            <h1>Bienvenido a METROPELIS</h1>
            <Link id='Link'>¿Ya tienes una cuenta? Iniciar sesion</Link>
            </div>
            
            <form className='box'>
                <div id='img'>
                <img className='smallLogo' src={Facebook__logo} alt='Logo de facebook'/>
                <img className='smallLogo' src={Google__logo} alt='Logo de google'/>
                </div>
                <div id='split'>
                <div id='left'>
                    <input className='input' type='label' placeholder='Nombre'></input>
                    <input className='input' type='label' placeholder='Apellido'></input>
                    <br />
                    <input id='longInput' type='email' placeholder='Correo electronico'></input>
                    <br />
                    <input className='input' type='password' placeholder='Contraseña'></input>
                    <input className='input' type='password' placeholder='Confirmar contraseña'></input>
                </div>
                <div id='right'>
                    <img src={Privacy} id='privacyLogo' alt='Privacy logo'/>
                </div>
                </div>
                <div id='position'>
                    <button id='registerButton'>
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    )
}