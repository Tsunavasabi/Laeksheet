import React , { Component } from 'react';
import './login.css';

class Login extends Component{
  render() {
    return (
      <div class="card">
        <h1>เข้าสู่ระบบ</h1><br/>
        <label>Username </label>
        <input type="text" class="input-text" placeholder="Username"></input><br/><br/>
        <label>Password </label>
        <input type="password" class="input-text1" placeholder="Password"></input><br/><br/><br/>
        <button>Login</button><br/><br/>
        <button>Register</button>
      </div>
    )
  }
}
export default Login;
