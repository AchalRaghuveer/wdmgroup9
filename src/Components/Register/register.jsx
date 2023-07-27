import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../global.css';

function URMCandidateRegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    nationality: '',
    location: '',
    ethnicity: '',
    education: '',
    researchExperience: '',
    publications: '',
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
          <li><Link to="/" style={{textDecoration: 'none'}}>Home</Link></li>
          <li className="dropdown">
            <a href="#">SERVICES</a>
            <div className="dropdown-content">
              <Link to="/serviceurm" style={{textDecoration: 'none'}} >CANDIDATE</Link>
              <Link to="/serviceacademia" style={{textDecoration: 'none'}} >ACADEMIA</Link>
              <Link to="/servicedei" style={{textDecoration: 'none'}} >DEI</Link>
              <a href="Services_Recruiter.html">RECRUITER</a>
            </div>
          </li>
          <li><Link to="/about" style={{textDecoration: 'none'}}>About US</Link></li>
          <li><Link to="/contact" style={{textDecoration: 'none'}}>Contact US</Link></li>
        </ul>
      </div>

      <div className="container">
        <section className="card">
          <h2 className="loginheader">URM Candidate Registration Form</h2>

          <form onSubmit={handleSubmit}>
            <table className="form-group">
              <tbody>
                <tr>
                  <th><label htmlFor="uname"><b>Name</b></label></th>
                  <td><input type="text" name="name" id="uname" placeholder="Enter your name" required onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                  <td><input type="text" name="phoneNumber" id="phoneno" placeholder="Enter your phone number" required onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="nationality"><b>Nationality</b></label></th>
                  <td><input type="text" name="nationality" id="nationality" placeholder="Enter nationality" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="location"><b>Location</b></label></th>
                  <td><input type="text" name="location" id="location" placeholder="Enter location" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="ethnicity"><b>Ethnicity</b></label></th>
                  <td><input type="text" name="ethnicity" id="ethnicity" placeholder="Enter ethnicity" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="education"><b>Education</b></label></th>
                  <td><input type="text" name="education" id="education" placeholder="Enter education" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="resexp"><b>Research Experience</b></label></th>
                  <td><input type="text" name="researchExperience" id="resexp" placeholder="Enter research experience" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="publication"><b>Publications</b></label></th>
                  <td><input type="text" name="publications" id="publication" placeholder="Enter publication" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="postions"><b>Positions</b></label></th>
                  <td><input type="text" name="positions" id="postions" placeholder="Enter positions" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="resume"><b>Resume</b></label></th>
                  <td><input type="file" id="resume" name="resume" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="coverletter"><b>Cover Letter</b></label></th>
                  <td><input type="file" id="coverletter" name="coverletter" onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="username"><b>Email</b></label></th>
                  <td><input type="email" name="email" id="username" placeholder="Enter email" required onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th><label htmlFor="password"><b>Password</b></label></th>
                  <td><input type="password" name="password" id="password" placeholder="Enter Password" required onChange={handleInputChange} /><br /></td>
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

export default URMCandidateRegistrationPage;
