import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth } from "../../../src/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../img/Google-logo.png'


export const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = useCallback(async e => {
    e.preventDefault()

    const { email, password } = e.target.elements
    
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      navigate('/home')
      alert('Login exitoso')
    } catch (e) {
      alert('Error en autenticacion, intente de nuevo')
    }
  }, [])

  const provider = new GoogleAuthProvider()

  const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    
  .then(() => {
    navigate('/home')
      alert('Login exitoso')
  })
  
  .catch(error)
   alert('Error en autenticacion, intente de nuevo')
  };

  return (
    <><div>
      <div id='top'>.</div>
      <br></br>
      <body className="square">
      <div className="headboard">
        <h1>Bienvenido a METROPELIS</h1>
        <Link id='Link' to='/register'>¿No tienes una cuenta? Registrate</Link>
      </div>
      <div className="headboard">
      <form id="form" onSubmit={handleSubmit}>
          <div>
          <input className="input" name="email" placeholder="correo" type="email" />
          </div>
          <div>
          <input className="input" name="password" placeholder="contraseña" type="password" />
          </div>
          <div>
          <button type="submit" className='boton'>Login</button>
          </div>
      </form>
      </div>
      <div className="headboard">
      <button id="botongoogle" onClick={signInWithGoogle}><img id='imggoogle' src={GoogleLogo} alt='logo google'></img></button>
      </div>
      </body>
      </div>
    </>
    
  )
}
