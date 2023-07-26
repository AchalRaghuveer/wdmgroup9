import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';


function ForgotPasswordPage() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target);
    const email = formData.get('username');
    console.log('Email:', email);
  };

  return (
    <div>
      <div className="navbar">
        <ul>
          <li><Link to="/" style={{textDecoration: 'none'}} >Home</Link></li>
          <li className="dropdown">
            <a href="#">SERVICES</a>
            <div className="dropdown-content">
              <a href="Services_URM_candidates.html">CANDIDATE</a>
              <a href="Services_Academia.html">ACADEMIA</a>
              <a href="Services_DEI.html">DEI</a>
              <a href="Services_Recruiter.html">RECRUITER</a>
            </div>
          </li>
          <li><Link to="/about" style={{textDecoration: 'none'}} >About US</Link></li>
          <li><Link to="/contact" style={{textDecoration: 'none'}} >Contact US</Link></li>
        </ul>
      </div>
      <div className="about_container">
        <section className="aboutin">
          <div className="about">
            <div className="about-content">
              <h2 style={{ textAlign: 'center' }}>Forgot Password?</h2>
              <h2 style={{ textAlign: 'center' }}>Enter your email address. You will receive a verification email with instructions.</h2>
              <section className="card">
                <form onSubmit={handleSubmit}> <br />
                  <table className="form-group">
                    <tbody>
                      <tr>
                        <th><label htmlFor="username"><b>Email</b></label></th>
                        <td><input type="email" name="username" id="username" placeholder="Enter email" required /> </td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <div className="form-group">
                            <input type="submit" value="Get Code" />
                          </div><br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </section>
            </div>
            <div className="button-container">
            <Link to="/role" style={{textDecoration: 'none'}} className="button">Register</Link>
            <Link to="/login" style={{textDecoration: 'none'}} className="button">Return to login</Link>
            </div>
          </div>
        </section>
      </div>
      <footer className="foot">
        <p>&copy; Group 9-CSE5335. ALL Rights Reserved. Diversity Connect</p>
      </footer>
    </div>
  );
}

export default ForgotPasswordPage;
