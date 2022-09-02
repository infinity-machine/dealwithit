import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';

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
    let mutation = formInput.type === 'register' ? addUser : loginUser;
    let type = formInput.type === 'register' ? 'addUser' : 'loginUser';

    const { data } = await mutation();

    user = data[type].user;
    token = data[type].token;

    localStorage.setItem('token', token);
    props.setUser(user);

    navigate('/gamescreen');
  };

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{formInput.type[0].toUpperCase() + formInput.type.slice(1)}</h1>
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
      <div className="type-wrap">
        <label htmlFor="login">
          Login
          <input checked={formInput.type === 'login'} onChange={handleInputChange} name="type" id="login" type="radio" value="login" />
        </label>
        <label htmlFor="register">
          Register
          <input checked={formInput.type === 'register'} onChange={handleInputChange} name="type" id="register" type="radio" value="register" />
        </label>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default AuthForm;

















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