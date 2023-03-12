import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth } from "../../../src/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useCallback } from 'react'
import './Login.css'


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

  return (
    <><div>
      <div id='top'>.</div>
      <br></br>
      <body className="square">
      <div className="headboard">
        <h3>MetroPelis</h3>
        <h4>Login</h4>
      </div>
      <div className="headboard">
      <form id="form" onSubmit={handleSubmit}>
          <div>
          <input name="email" placeholder="correo" type="email" />
          </div>
          <div>
          <input name="password" placeholder="contraseña" type="password" />
          </div>
          <div>
          <button type="submit" className='boton'>Login</button>
          </div>
      </form>
      </div>
      <div className="headboard">
      <button className='boton'> Google </button>
      </div>
      <div className="headboard">
      <button className='boton'onClick={()=>navigate('/register')} > Registro </button>
      </div>
      </body>
      </div>
    </>
    
  )
}
