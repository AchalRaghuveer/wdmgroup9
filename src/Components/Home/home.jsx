import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';

function HomePage() {
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

      <main className="homemid">
        <h1>DIVERSITY CONNECT</h1>
        <p className="center">Unleash Your Remarkable Potential with URM <br /> Empowering Success, Igniting Excellence!</p>

        <div className="button-container">
          <Link to="/login" style={{textDecoration: 'none'}} className="button">Login</Link>
          <Link to="/role" style={{textDecoration: 'none'}} className="button">Register</Link>
        </div>
      </main>

      <footer className="foot">
        <p>&copy; Group 9-CSE5335. ALL Rights Reserved. Diversity Connect</p>
      </footer>
    </div>
  );
}

export default HomePage;
