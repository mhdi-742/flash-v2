import React, { useState } from 'react'
import "./signin.css"
import Navbar from "./navbar";
import { useNavigate } from 'react-router-dom'
import { NavLink, useParams } from 'react-router-dom'
import { AppContext, useGlobalContext } from '../contex';

const Signin=()=>{
    const {check, gab,logged,islogged}=useGlobalContext();
    const navigate=useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const onButtonClick = async(e) => {
        const hello=check(email,password);
        if(hello===1) {gab();localStorage.setItem("token","logged");islogged(true);await navigate("/dashbord");}
        else {alert("password=password username=admin");localStorage.removeItem('token');}
      }
    return(
        <div className='og'>
    <Navbar/>
    <div className="main">
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Signin</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
      <br/>
    </div>
    </div>
    
    </div>
    )
}
export default Signin;