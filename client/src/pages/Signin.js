import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import signinpageImage from "./img/signinpagetop.png";
import signinpagebttmImage from "./img/newbottom2.png";
import '../fonts/Neuliner Bold.otf';
// import loginImage from "./img/login1.png";
// import registerImage from "./img/register.png";

import './css/style.css';

// const register = registerImage;
// const login = loginImage;
const signinpagebg = signinpageImage;
const signinpagebottom = signinpagebttmImage;

function AuthForm(props) {
  const [formInput, setFormInput] = useState({
    username: '',
    email: '',
    password: '',
    bank: 10000,
    type: 'login'
  });
  const [addUser] = useMutation(ADD_USER, {
    variables: formInput
  });
  const [loginUser] = useMutation(LOGIN_USER, {
    variables: formInput
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user, token;
    console.log(user)
    let mutation = formInput.type === 'register' ? addUser : loginUser;
    let type = formInput.type === 'register' ? 'addUser' : 'loginUser';

    const { data } = await mutation();

    user = data[type].user;
    token = data[type].token;

    localStorage.setItem('token', token);
    props.setUser(user);

    navigate('/playgame');
  };

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <div className="overoverall" >
        <div className="form-box" >
        <img src={signinpagebg} width="390px" alt="graphic at top of signin box" />
    <form onSubmit={handleSubmit} >
      {/* <h1>{formInput.type[0].toUpperCase() + formInput.type.slice(1)}</h1> */}
      <input
        name="username"
        value={formInput.username}
        onChange={handleInputChange}
        type="text"
        placeholder="Enter your Username" />
      <input
        name="email"
        value={formInput.email}
        onChange={handleInputChange}
        type="email"
        placeholder="Enter your email address" />
      <input
        name="password"
        value={formInput.password}
        onChange={handleInputChange}
        type="password"
        placeholder="Enter your password" />
        <div>
            <label htmlFor="login">
            <input checked={formInput.type === 'login'} onChange={handleInputChange} name="type" id="login" type="radio" value="login" className="box-shadow"/> <span className="loginlabel">Login</span></label>
   
            <label htmlFor="register">
            <input checked={formInput.type === 'register'} onChange={handleInputChange} name="type" id="register" type="radio" value="register" className="box-shadow"/><span className="loginlabel">Register</span></label>
        </div>
            <button className="buttonsty" type = 'submit'>Click to submit</button>
        </form>
      <img src={signinpagebottom} width="390px" alt="graphic at bottom of signin box" />
     </div>
    </div>
  </div>
  )
}

export default AuthForm;




<div className="overoverall">
  <div className="overall"> 
    <div className="wordsblocktop">


    </div>
    <div className="dealbutton" >



    </div>
  </div>
</div>












// import {useState} from 'react'
// import {LOGIN_USER } from '../utils/mutations';

// const Signin = () => {
//     const [formInput,setFormInput] = useState({
//         email:'',
//         password:'',
//     })
//     const handleInput = (event)=>{
//         setFormInput({
//             ...formInput,
//             [event.target.name]: event.target.value
//         })

//     }
//     const [loginUser] = useMutation(LOGIN_USER, {
//         variables: formInput
//       });
//     const handleSubmit =(event)=>{
//         event.preventDefault();
//         //left off here -Eli 
        
//     }
    

//     return (
//         <div className="row">
//             <div className="col-md-6">
//                 <h2>Login</h2>


//                 <form className="form login-form">
//                     <div className="form-group">
//                         <label htmlFor="email-login">email:</label>
//                         <input name="email" onChange={handleInput} className="form-input" type="text" id="username-signin" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password-login">password:</label>
//                         <input  name="password" onChange={handleInput}  className="form-input" type="password" id="password-login" />
//                     </div>
//                     <div className="form-group">
//                         <button className="btn btn-primary" type="submit" onClick={handleSubmit}>login</button>
//                     </div>
//                 </form>
//             </div>
//             <p>Or click to sign up:</p>
//             <button className="btn btn-primary" type="submit">signup</button>
//         </div>
//     );
// }

// export default Signin;