import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css'; 

function ServicesURMPage() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li><Link to="/" style={{textDecoration: 'none'}}>HOME</Link></li>
          <li className="dropdown">
            <a href="#">SERVICES</a>
            <div className="dropdown-content">
              <Link to="/serviceurm" style={{textDecoration: 'none'}} >CANDIDATE</Link>
              <Link to="/serviceacademia" style={{textDecoration: 'none'}} >ACADEMIA</Link>
              <Link to="/servicedei" style={{textDecoration: 'none'}} >DEI</Link>
              <a href="Services_Recruiter.html">RECRUITER</a>
            </div>
          </li>
          <li><Link to="/about" style={{textDecoration: 'none'}}>ABOUT US</Link></li>
          <li><Link to="/contact" style={{textDecoration: 'none'}}>CONTACT US</Link></li>
        </ul>
      </div>

      <div className="about_container">
        <section className="aboutin">
          <div className="about">
            <div className="about-content">
              <h2 style={{textAlign: 'center'}}>Candidates</h2>
              <p>On this platform, you'll find various avenues for pursuing a PhD, postdoctoral research, and
                faculty positions. Once you've completed the registration process, you can proceed to apply for
                desired positions and engage in conversations with the institution, recruiters, and DEI officers
                to address any questions or concerns you may have.</p>
            </div>
            <div className="urm-img"></div>
            <div className="button-container">
              <Link to="/urmcandidateReg" className="button">Register</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesURMPage;
