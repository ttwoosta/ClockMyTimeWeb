import * as React from 'react';
import { connect } from 'react-redux';
import './loginStyle.css';

const Login = () => (
    <div className="loginbox">
        <img src="Images/Icons/building-line.png" className="avatar" />
            <h1>Login Here</h1>
            <form>
                <p>Username</p>
                <input type="text" name="" placeholder="Enter Username" />
                    <p>Password</p>
                    <input type="password" name="" placeholder="Enter Password" />
                    <input type="submit" name="" value="Login" />
                    <a href="#">Lost your password?</a><br />
                    <a href="#">Don't have an account?</a>
            </form>
    </div>
);

export default connect()(Login);
