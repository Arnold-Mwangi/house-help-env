import React, { useState } from 'react';
import './Login.css';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  }

  const handleClose = () => {
    props.setShowModal(false);
  }
  const handleSuccess = () => {
    props.setShowModal(false);
  }

  return (
    <div className="login-modal">
      <div className="login-content">
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn" onClick={handleSuccess}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
