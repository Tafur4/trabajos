import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export const Registro = () => {
    const verificar = () =>{
        let userName = document.getElementById('user').value
        let password = document.getElementById('password').value
        let name = document.getElementById('name').value

        axios.post('https://backend-edw.herokuapp.com/usuario', {
            username: userName,
            password: password,
            name: name
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
        <div className="page">
            <div className="container">
                <div className="left">
                <div className="login">registro</div>
                <div className="eula">Bienvenido al registro</div>
                </div>
                <div className="right">
                <svg viewBox="0 0 320 300">
                    <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
                </svg>
                <div className="form">
                    <label htmlFor="email">User</label>
                    <input type="email" id="user"/>
                    <label htmlFor="email">Name</label>
                    <input type="email" id="name"/>
                    <label for="password">Password</label>
                    <input type="password" id="password"/>
                    <button onClick={verificar} id="submit">Submit</button> 
                    <NavLink to="/">
                        <button id="submit">Login</button>
                    </NavLink>
                </div>
                </div>
            </div>
        </div>
  )
}
