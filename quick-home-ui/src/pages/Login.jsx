import React from 'react';
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const  Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });

  };

  return (
    <div className='Login-Container'>
      <div className='Login-Wrapper'>
        <h1 className='Login-Title'>SIGN IN</h1>
        <form className='Login-Form'>
          <input className='Login-Input' placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
          <input className='Login-Input' placeholder="password" type="password"
            onChange={(e) => setPassword(e.target.value)}/>
          <button className='Login-Button' onClick={handleClick} disabled={isFetching}>LOGIN</button>

         {/*  
         {error && <span className='Error'>Something went wrong...</span>}*/}
          <a className='Login-Link'>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className='Login-Link' href = "/register" style={{ color: 'black' }}>NEW USER? CREATE AN ACCOUNT</a>
        </form>
      </div>
    </div>
  );
}

export default Login;