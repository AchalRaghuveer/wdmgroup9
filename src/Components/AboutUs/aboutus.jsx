import React from 'react';
import FaceBook from '../../Pictures/facebook.png';
import Insta from '../../Pictures/instagram.png';
import Twit from '../../Pictures/twitter.png';
import Threads from '../../Pictures/threads.png';
import { Link } from 'react-router-dom';
import '../../global.css';

function AboutUsPage() {
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

      <div className="about_container">
        <section className="aboutin">
          <div className="about">
            <div className="about-content">
              <h2 style={{ textAlign: 'center' }}>ABOUT US</h2>
              <p>Greetings from the URM Portal! We are committed to strengthening people of color who are underrepresented
                in society by giving them access to scholarships, a supportive community, useful tools, and networking
                opportunities. Our goal is to promote inclusivity, diversity, and fair chances for all. Join us as we work
                to build a more just society on this journey of empowerment and constructive change.</p>
              <div className="icons">
                <img src={FaceBook} alt="Facebook" />
                <img src={Insta} alt="Instagram" />
                <img src={Threads} alt="Threads" />
                <img src={Twit} alt="Twitter" />
              </div>
            </div>
            <div className="about-img"></div>
          </div>
        </section>
      </div>

      <footer className="foot">
        <p>&copy; Group 9-CSE5335. ALL Rights Reserved. Diversity Connect</p>
      </footer>
    </div>
  );
}

export default AboutUsPage;
