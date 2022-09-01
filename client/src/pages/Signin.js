import {useState} from 'react'
import {LOGIN_USER } from '../utils/mutations';


const Signin = () => {
    const [formInput,setFormInput] = useState({
        email:'',
        password:'',
    })
    const handleInput = (event)=>{
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.value
        })

    }
    const [loginUser] = useMutation(LOGIN_USER, {
        variables: formInput
      });
    const handleSubmit =(event)=>{
        event.preventDefault();
        //left off here -Eli 
        
    }
    

    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Login</h2>

                <form className="form login-form">
                    <div className="form-group">
                        <label htmlFor="email-login">email:</label>
                        <input name="email" onChange={handleInput} className="form-input" type="text" id="username-signin" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-login">password:</label>
                        <input  name="password" onChange={handleInput}  className="form-input" type="password" id="password-login" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>login</button>
                    </div>
                </form>
            </div>
            <p>Or click to sign up:</p>
            <button className="btn btn-primary" type="submit">signup</button>
        </div>
    );
}

export default Signin;