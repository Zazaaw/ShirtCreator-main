import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="signup-container">
      <div className="signup-header">
        <div className="signup-logo"><img
                    src='./logo-web.png'
                    alt='logo'
                    className='w-8 h-8 object-contain' 
                  />
        </div>
        <h2 className="signup-title">Your journey starts here</h2>
        <p className="signup-subtitle">Take the first step</p>
      </div>

      <form className="signup-form">
        <div className="signup-input-group">
          <span className="signup-icon"><img src="../src/assets/signup/ic_outline-email.png"/></span>
          <input type="email" placeholder="E-mail" className="signup-input" />
        </div>
        <div className="signup-input-group">
          <span className="signup-icon"><img src="../src/assets/signup/mdi_user-outline.png"/></span>
          <input type="text" placeholder="Username" className="signup-input" />
        </div>
        <div className="signup-input-group">
          <span className="signup-icon"><img src="../src/assets/signup/mdi_password.png"/></span>
          <input type="password" placeholder="Password" className="signup-input" />
        </div>
        <div className="signup-input-group">
          <span className="signup-icon"><img src="../src/assets/signup/mdi_password.png"/></span>
          <input type="password" placeholder="Confirm password" className="signup-input" />
        </div>

        <button className="signup-button">Sign up</button>

        <div className="signup-divider">
          <span className="signup-line"></span>
          <span className="signup-or">or</span>
          <span className="signup-line"></span>
        </div>

        <div className="signup-social">
          <span className="signup-social-icon"><img src="../src/assets/signup/logos_facebook.png"/></span>
          <span className="signup-social-icon"><img src="../src/assets/signup/ic_baseline-apple.png"/></span>
          <span className="signup-social-icon"><img src="../src/assets/signup/devicon_google.png"/></span>
        </div>

        <p className="signup-footer">
          Already have an account? <a onClick={() => navigate('/loginadmin')} className="signup-link">Sign in</a>
        </p>
      </form>
    </div>
    </>
  )
}

export default SignUp