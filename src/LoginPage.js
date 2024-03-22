import React, { useState } from 'react';
import Navbar from './Navbar';
import LoginStyle from './CSS Modules/LoginPage.module.css';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

    // I assume the submission to database will go here as well but not sure.
  const handleSubmit = (event) => {
    event.preventDefault();
  
    let usernameErrorMsg = '';
    let passwordErrorMsg = '';
    let emailErrorMsg = '';
    let confirmPasswordErrorMsg = '';
  
    // Validation for username
    if (username.length < 10) {
      usernameErrorMsg = 'Username must be at least 10 characters long.';
    }
  
    // Validation for email probably needs work
    if (!email.includes('@') || !email.endsWith('.com')) {
      emailErrorMsg = 'Please enter a valid email address.';
    }
  
    // Validation for password
    if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
      passwordErrorMsg = 'Must contain at least one capital letter and one number.';
    }
  
    // Validation for confirm password
    if (confirmPassword !== password) {
      confirmPasswordErrorMsg = 'Passwords do not match.';
    }
  
    setUsernameError(usernameErrorMsg);
    setPasswordError(passwordErrorMsg);
    setEmailError(emailErrorMsg);
    setConfirmPasswordError(confirmPasswordErrorMsg);
  
    // If any field has an error, prevent form submission
    if (usernameErrorMsg || passwordErrorMsg || emailErrorMsg || confirmPasswordErrorMsg) {
      return;
    }

    // Set error messages
    setUsernameError(usernameErrorMsg);
    setPasswordError(passwordErrorMsg);
    setEmailError(emailErrorMsg);
    setConfirmPasswordError(confirmPasswordErrorMsg);

    if (usernameErrorMsg || passwordErrorMsg || emailErrorMsg || confirmPasswordErrorMsg) {
      return;
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
    setUsername('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');

    setUsernameError('');
    setPasswordError('');
    setEmailError('');
    setConfirmPasswordError('');
  };

  return (
    <body className={LoginStyle.reactive_background}>
      <div>
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className={LoginStyle.container}>
          {showLoginForm && (
            <form className={LoginStyle.form} id="login" onSubmit={handleSubmit}>
              <h1 className={LoginStyle.form_title}>Login</h1>
              <div className={`${LoginStyle.form_input_group}`}>
                <input 
                  type="text" 
                  className={LoginStyle.form_input} 
                  autoFocus 
                  placeholder="Username or email" 
                  value={username} 
                  onChange={handleUsernameChange} 
                />
                <div className={LoginStyle.form_input_error_message}>{usernameError}</div>
              </div>
              <div className={LoginStyle.form_input_group}>
                <input 
                  type="password" 
                  className={LoginStyle.form_input} 
                  placeholder="Password" 
                  value={password} 
                  onChange={handlePasswordChange} 
                />
                <div className={LoginStyle.form_input_error_message}>{passwordError}</div>
              </div>
              <button className={LoginStyle.form_button} type="submit">Continue</button>
              <p className={LoginStyle.form_text}>
                <button className={LoginStyle.form_link} onClick={toggleForm}>Don't have an account? Create an account</button>
              </p>
            </form>
          )}

  {!showLoginForm && (
    <form className={LoginStyle.form} id="createAccount" onSubmit={handleSubmit}>
      <h1 className={LoginStyle.form_title}>Create Account</h1>
      <div className={`${LoginStyle.form_message} ${LoginStyle.form_message_error}`}></div>
      <div className={LoginStyle.form_input_group}>
        <input 
          type="text" 
          className={LoginStyle.form_input} 
          autoFocus 
          placeholder="Username" 
          value={username} 
          onChange={handleUsernameChange} 
        />
        <div className={LoginStyle.form_input_error_message}>{usernameError}</div>
      </div>
      <div className={LoginStyle.form_input_group}>
        <input 
          type="text" 
          className={LoginStyle.form_input} 
          autoFocus 
          placeholder="Email Address" 
          value={email} 
          onChange={handleEmailChange} 
        />
        <div className={LoginStyle.form_input_error_message}>{emailError}</div>
      </div>
      <div className={LoginStyle.form_input_group}>
        <input 
          type="password" 
          className={LoginStyle.form_input} 
          placeholder="Password" 
          value={password} 
          onChange={handlePasswordChange} 
        />
        <div className={LoginStyle.form_input_error_message}>{passwordError}</div>
      </div>
      <div className={LoginStyle.form_input_group}>
        <input 
          type="password" 
          className={LoginStyle.form_input} 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={handleConfirmPasswordChange} 
        />
        <div className={LoginStyle.form_input_error_message}>{confirmPasswordError}</div>
      </div>
      <button className={LoginStyle.form_button} type="submit">Continue</button>
      <p className={LoginStyle.form_text}>
        <button className={LoginStyle.form_link} onClick={toggleForm}>Already have an account? Sign in</button>
      </p>
    </form>
  )}
        </div>
        {}
        <div className={LoginStyle.wave}></div>
        <div className={LoginStyle.wave}></div>
        <div className={LoginStyle.wave}></div>
      </div>
    </body>
  );
};

export default LoginPage;
