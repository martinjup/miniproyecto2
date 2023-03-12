import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Facebook__logo from '../../img/Facebook-logo.png';
import Google__logo from '../../img/Google-logo.png';
import Privacy from '../../img/Privacy-policy-logo.png';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerWithEmail, signInWithGoogle } from '../../firebase/auth-service'


export function Register(props){
    const navigate = useNavigate()
    const handleSigInWtihGoogle = async () => {
        await signInWithGoogle()
        .then(() => {
            navigate('/home')
              alert('Registro exitoso')
          })
          
          .catch(error)
           alert('Error en autenticacion, intente de nuevo')
          };

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) =>{
    await registerWithEmail(data)
    .then(() => {
        navigate('/home')
          alert('Registro exitoso')
      })
      
      .catch(error)
       alert('Error en autenticacion, intente de nuevo')
      
    }


    return(
        <div> 
            <div id='header'>
                <p>.</p>
            </div>
            <div className='headerText'>
            <h1>Bienvenido a METROPELIS</h1>
            <Link id='Link' to='/'>¿Ya tienes una cuenta? Iniciar sesion</Link>
            </div>
            
            <form className='box' onSubmit={handleSubmit(onSubmit)}>
                <div id='img'>
                <img className='smallLogo' src={Facebook__logo} alt='Logo de facebook'/>
                <img className='smallLogo' src={Google__logo} alt='Logo de google' onClick={handleSigInWtihGoogle}/>
                </div>
                <div id='split'>
                <div id='left'>
                    <input className='input' type='label' placeholder='Nombre' name='nombre' {...register('nombre', { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i  })}></input>
                    {errors.nombre?.type === 'required' && <p>El campo es requerido</p>}
                    <input className='input' type='label' placeholder='Apellido' name='apellido'   {...register("apellido", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i  }) }></input>

                    <br />
                    <input id='longInput' type='email' placeholder='Correo electronico' name='email' {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i  })}></input>
                    <br />
                    <input className='input' type='password' placeholder='Contraseña' 
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    {...register('password')}></input>
                    
                </div>
                <div id='right'>
                    <img src={Privacy} id='privacyLogo' alt='Privacy logo'/>
                </div>
                </div>
                <div id='position'>
                    <input type='submit' value='Crear cuenta'/>
                </div>
            </form>
        </div>
    )
}