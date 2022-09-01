import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { ADD_USER, LOGIN_USER } from '../utils/mutations'

const Signin = () => {
    return (
        <div class="row">
            <div class="col-md-6">
                <h2>Login</h2>

                <form class="form login-form">
                    <div class="form-group">
                        <label for="email-login">email:</label>
                        <input class="form-input" type="text" id="email-login" />
                    </div>
                    <div class="form-group">
                        <label for="password-login">password:</label>
                        <input class="form-input" type="password" id="password-login" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit">login</button>
                    </div>
                </form>
            </div>
            <p>Or click to sign up:</p>
            <button class="btn btn-primary" type="submit">signup</button>
        </div>
    );
}

export default Signin;