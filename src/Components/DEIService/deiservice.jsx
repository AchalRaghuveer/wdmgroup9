import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css'; 

function ServicesDEIPage() {
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
              <h2 style={{textAlign: 'center'}}>DEI</h2>
              <p>Diversity Connect presents a vital feature for DEI Officers, allowing them to showcase their
                organization's commitment to diversity, equity, and inclusion (DEI) through specific goals and
                initiatives. They can utilize a comprehensive search functionality to find candidates who align
                with their preferences and desired locations. Additionally, DEI Officers have the convenience of
                communicating with institutions, recruiters, and candidates directly. Moreover, they hold the
                authority to approve or disapprove job postings to ensure alignment with DEI objectives. With
                these essential tools at their disposal, DEI Officers can actively foster an inclusive and
                equitable academic community, promoting diversity at every step of the hiring process.</p>
            </div>
            <div className="dei-img"></div>
            <div className="button-container">
              <Link to="/deiReg" className="button">Register</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesDEIPage;
