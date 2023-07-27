import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';

function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log({
      email: formData.get('username'),
      password: formData.get('password'),
    });
  };

  return (
    <div>
      <div className="navbar">
        <ul>
        <li><Link to="/" style={{textDecoration: 'none'}} >Home</Link></li>
          <li className="dropdown">
            <a href="#">SERVICES</a>
            <div className="dropdown-content">
              <Link to="/serviceurm" style={{textDecoration: 'none'}} >CANDIDATE</Link>
              <Link to="/serviceacademia" style={{textDecoration: 'none'}} >ACADEMIA</Link>
              <Link to="/servicedei" style={{textDecoration: 'none'}} >DEI</Link>
              <a href="Services_Recruiter.html">RECRUITER</a>
            </div>
          </li>
          <li><Link to="/about" style={{textDecoration: 'none'}} >About US</Link></li>
          <li><Link to="/contact" style={{textDecoration: 'none'}} >Contact US</Link></li>
        </ul>
      </div>

      <div className="container">
        <section className="card">
          <h2 className="loginheader">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="email" id="username" placeholder="Enter your email" required />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            <br />
            <br />
            <div className="form-group">
              <input type="submit" value="Login" />
            </div>
          </form>
          <br />
          <div className="button-container">
          <Link to="/role" style={{textDecoration: 'none'}} className="button">Register</Link>
          <Link to="/forgot" style={{textDecoration: 'none'}} className="button">Forgot password?</Link>

          </div>
        </section>
        <footer className="foot">
          <p>&copy; Group 9-CSE5335. ALL Rights Reserved. Diversity Connect</p>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;

