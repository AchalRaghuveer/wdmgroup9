import React from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';

function ContactUsPage() {
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

      <div className="container">
        <section className="card">
          <form action="" method="post"> <br />
            <table className="form-group">
              <tr>
                <th colSpan="2"><h2>Contact Us</h2></th>
              </tr>
              <tr>
                <th><label htmlFor="aname"><b>User ID</b></label></th>
                <td> <input type="text" name="" id="aname" placeholder="Enter your User ID" required /></td>
              </tr>
              <tr>
                <th><label htmlFor="dname"><b>Name</b></label></th>
                <td> <input type="text" name="" id="dname" placeholder="Enter your name" required /></td>
              </tr>
              <tr>
                <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                <td>
                  <input type="text" name="" id="phoneno" placeholder="Enter your phone number" required />
                </td>
              </tr>
              <tr>
                <th><label htmlFor="adesc"><b>Comments</b></label></th>
                <td>
                  <textarea rows="4" cols="57" id="adesc" placeholder="Enter your Comments" />
                </td>
              </tr>
              <tr>
                <th><label htmlFor="username"><b>Email</b></label></th>
                <td><input type="email" name="" id="username" placeholder="Enter email" required /></td>
              </tr>
              <tr>
                <td colSpan="2">
                  <div className="form-group">
                    <input type="submit" value="submit" />
                  </div><br />
                </td>
              </tr>
            </table>
          </form>
        </section>

        <section className="card">
          <h3>Reach out to:</h3>
          <p>Phone: <a href="tel:6822869981">(682)-286-9981</a><br />
            Mail to us at: <a href="mailto:diversityconnect@gmail.com">diversityconnect@gmail.com</a></p><br /><br />
        </section>

        <footer className="foot">
          <p>&copy; Group 9-CSE5335. ALL Rights Reserved. Diversity Connect</p>
        </footer>
      </div>
    </div>
  );
}

export default ContactUsPage;
