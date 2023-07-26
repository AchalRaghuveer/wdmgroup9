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
              <a href="Services_URM_candidates.html">CANDIDATE</a>
              <a href="#">ACADEMIA</a>
              <a href="Services_DEI.html">DEI</a>
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
            <a href="URM_Candidate_registration.html">URM Candidate</a>
            <a href="Academic_Institution_registration.html">Academic Institution</a>
            <a href="Recruiter_registration.html">Recruiter</a>
            <a href="DEI_officer_registration.html">DEI Officer</a>
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
