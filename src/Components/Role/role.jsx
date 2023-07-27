import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css'; 

function RolePage() {
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
              <a href="#">RECRUITER</a>
            </div>
          </li>
          <li><Link to="/about" style={{textDecoration: 'none'}} >About US</Link></li>
          <li><Link to="/contact" style={{textDecoration: 'none'}} >Contact US</Link></li>
        </ul>
      </div>
      <div className="container">
        <header className="header"></header>
        <section>
          <div className="center">
            <h2>Select your role</h2>
          </div>
          <br />
          <div className="links">
          <Link to="/urmcandidateReg" style={{textDecoration: 'none'}} >URM Candidate</Link>
          <Link to="/academicReg" style={{textDecoration: 'none'}} >Academic Institution</Link>
            <a href="Recruiter_registration.html">Recruiter</a>
            <Link to="/deiReg" style={{textDecoration: 'none'}} >DEI Officer</Link>
          </div>
        </section>
        <footer className="foot">
          <p>&copy; Group 9-CSE5335. ALL Rights Reserved. Diversity Connect</p>
        </footer>
      </div>
    </div>
  );
}

export default RolePage;
