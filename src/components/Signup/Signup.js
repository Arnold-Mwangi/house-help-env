import React, { useState } from 'react';
import './Signup.css';

function Signup(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('employee');



  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }
  
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('User Type:', userType);
  }

  const handleClose = () => {
    props.setShowModal(false);
  }

  const handleSuccess = () => {
    props.setShowModal(false);
  }
  

    return (
    <div className="signup-modal">
      <div className="signup-content">
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone number" value={phone} onChange={handlePhoneChange} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </div>
          <div className="form-group">
          <label>
              <input type="radio" name="userType" value="employee" checked={userType === 'employee'} onChange={handleUserTypeChange} />
              Employee
            </label>
            <label>
              <input type="radio" name="userType" value="employer" checked={userType === 'employer'} onChange={handleUserTypeChange} />
              Employer
            </label>         
          </div>
          <div className="form-group">
            <button type="submit" className="btn" onClick={handleSuccess}>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
