import React, { useState } from 'react';
import './LoginSignup.css';
import { useNavigate } from "react-router-dom"


const LoginSignup = ({setIsLoggedIn}) => {
  const [action, setAction] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/cart");
  };
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('https://json-server-ogfs.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log('User added:', data);
      if (response.status === 201) {
        setSuccessMessage('Signup successful! You can now log in.');
      } else {
        setSuccessMessage('');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://json-server-ogfs.onrender.com/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      const matchingUser = data.find(
        (user) => user.email === email && user.password === password
      );
  
      if (matchingUser) {
        console.log('Login successful');
        setIsLoggedIn(true); 
        setSuccessMessage('Login successful!');
        handleGoBack();
      } else {
        console.log('Login failed');
        setIsLoggedIn(false);
        setSuccessMessage('Login failed. Please check your credentials.');

      }
    } catch (err) {
      console.error('Error:', err);
    }
  };
  
  return (
    <div className='Container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      {action === 'Sign Up' && (
        <div className='inputs'>
          <div className='input'>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className='inputs'>
        <div className='input'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className='Submit-container'>
        <div
          className={action === 'Sign Up' ? 'Submit' : 'submit-active'}
          onClick={() => {
            if (action === 'Sign Up') {
              handleSignUp();
            }
            setAction('Sign Up');
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Login' ? 'Submit' : 'submit-inactive'}
          onClick={() => {
            if (action === 'Login') {
              handleLogin();
            }
            setAction('Login');
          }}
        >
          Login
        </div>
      </div>
      {successMessage && <div style={{color:"green",fontWeight:"1000"}}>{successMessage}</div>}

    </div>
  );
};

export default LoginSignup;
