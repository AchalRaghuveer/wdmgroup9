import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../global.css'; 

function DEIOfficerRegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    role: '',
    organization: '',
    goals: '',
    initiatives: '',
    newEvents: '',
    positions: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

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

      <div className="container">
        <section className="card">
          <h2>DEI Officer Registration Form</h2>

          <form onSubmit={handleSubmit}>
            <table className="form-group">
              <tbody>
                <tr>
                  <th><label htmlFor="dname">Name</label></th>
                  <td><input type="text" name="name" id="dname" placeholder="Enter your name" required onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="ddesc">Description</label></th>
                  <td><textarea rows="3" cols="57" name="description" id="ddesc" placeholder="Enter description" onChange={handleInputChange}></textarea></td>
                </tr>
                <tr>
                  <th><label htmlFor="role">Role</label></th>
                  <td><input type="text" name="role" id="role" placeholder="Enter role" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="organization">Organization</label></th>
                  <td><input type="text" name="organization" id="organization" placeholder="Enter your organization" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="goals">Goals</label></th>
                  <td><input type="text" name="goals" id="goals" placeholder="Enter goals" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="initiatives">Initiatives</label></th>
                  <td><input type="text" name="initiatives" id="initiatives" placeholder="Enter Initiatives" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="event">New Initiatives/Events</label></th>
                  <td><input type="text" name="newEvents" id="event" placeholder="Enter new Initiatives or Events" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="positions">Positions</label></th>
                  <td><input type="text" name="positions" id="positions" placeholder="Enter positions" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="username">Email</label></th>
                  <td><input type="email" name="email" id="username" placeholder="Enter email" required onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="password">Password</label></th>
                  <td><input type="password" name="password" id="password" placeholder="Enter Password" required onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <div className="form-group">
                      <input type="submit" value="SignUp" />
                    </div><br />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <br />
          <div className="button-container">
            <Link to="/login" style={{textDecoration: 'none'}} className="button">Back to Login</Link>
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

export default DEIOfficerRegistrationPage;
