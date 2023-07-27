import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css'; 

function ServicesAcademiaPage() {
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
              <h2 style={{textAlign: 'center'}}>Academia</h2>
              <p>Our platform offers you the ability to post job details effortlessly. Upon completing the
                registration process, you gain access to connect with potential candidates who are interested in
                the positions you have available. You'll have the convenience of viewing their profiles and
                saving them for future reference, making the hiring process smoother and more efficient. In
                addition to the aforementioned features, our platform also empowers you with the ability to
                provide feedback to the candidates you have hired or contacted. We understand the significance
                of constructive communication throughout the hiring process, and this functionality allows you
                to share valuable insights with candidates, fostering a transparent and meaningful interaction
                for both parties involved.</p>
            </div>
            <div className="acad-img"></div>
            <div className="button-container">
              <Link to="/academicReg" className="button">Register</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesAcademiaPage;
