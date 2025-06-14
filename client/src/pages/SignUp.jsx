import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Invalid email format');
      return;
    }

    if (username.trim().length < 3) {
  setErrorMsg('Username must be at least 3 characters and cannot be blank');
  return;
}

const usernameRegex = /^[a-zA-Z0-9_]+$/;
if (!usernameRegex.test(username)) {
  setErrorMsg('Username can only contain letters, numbers, and underscores');
  return;
}

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || 'Registration failed');
        return;
      }

      setSuccessMsg('Registration successful!');
      setTimeout(() => navigate('/loginadmin'), 1500);

    } catch (error) {
      console.error('Register error:', error);
      setErrorMsg('Server error. Please try again.');
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-header">
          <div className="signup-logo">
            <img src="./logo-web.png" alt="logo" className="w-8 h-8 object-contain" />
          </div>
          <h2 className="signup-title">Your journey starts here</h2>
          <p className="signup-subtitle">Take the first step</p>
        </div>

        <form className="signup-form" onSubmit={handleRegister}>
          <div className="signup-input-group">
            <span className="signup-icon">
              <img src="../src/assets/signup/ic_outline-email.png" alt="email" />
            </span>
            <input
              type="email"
              placeholder="E-mail"
              className="signup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="signup-input-group">
            <span className="signup-icon">
              <img src="../src/assets/signup/mdi_user-outline.png" alt="username" />
            </span>
            <input
              type="text"
              placeholder="Username"
              className="signup-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="signup-input-group">
            <span className="signup-icon">
              <img src="../src/assets/signup/mdi_password.png" alt="password" />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="signup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="signup-input-group">
            <span className="signup-icon">
              <img src="../src/assets/signup/mdi_password.png" alt="confirm" />
            </span>
            <input
              type="password"
              placeholder="Confirm password"
              className="signup-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {errorMsg && <div style={{ color: 'red', marginBottom: '10px' }}>{errorMsg}</div>}
          {successMsg && <div style={{ color: 'green', marginBottom: '10px' }}>{successMsg}</div>}

          <button type="submit" className="signup-button">Sign up</button>

          <div className="signup-divider">
            <span className="signup-line"></span>
            <span className="signup-or">or</span>
            <span className="signup-line"></span>
          </div>

          <div className="signup-social">
            <span className="signup-social-icon">
              <img src="../src/assets/signup/logos_facebook.png" alt="facebook" />
            </span>
            <span className="signup-social-icon">
              <img src="../src/assets/signup/ic_baseline-apple.png" alt="apple" />
            </span>
            <span className="signup-social-icon">
              <img src="../src/assets/signup/devicon_google.png" alt="google" />
            </span>
          </div>

          <p className="signup-footer">
            Already have an account?{' '}
            <a onClick={() => navigate('/loginadmin')} className="signup-link">Sign in</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
