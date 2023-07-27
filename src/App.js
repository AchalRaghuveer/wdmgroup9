import React from 'react';
import Login from './Components/Login/login';
import RolePage from './Components/Role/role';
import ForgotPasswordPage from './Components/ForgotPassword/forgotpassword';
import HomePage from './Components/Home/home';
import AboutUsPage from './Components/AboutUs/aboutus';
import ContactUsPage from './Components/Contact/contact';
import URMCandidateRegistrationPage from './Components/Register/register';
import DEIOfficerRegistrationPage from './Components/DEIRegistration/deiReg';
import AcademicInstitutionRegistrationPage from './Components/AcademicReg/academicReg';
import ServicesAcademiaPage from './Components/AcademicService/academicService';
import ServicesURMPage from './Components/URMCandidateService/urmcan';
import ServicesDEIPage from './Components/DEIService/deiservice';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    // <Provider store={Store}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/role" element={<RolePage />} />
          <Route path="/forgot" element={<ForgotPasswordPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/urmcandidateReg" element={<URMCandidateRegistrationPage />} />
          <Route path="/deiReg" element={<DEIOfficerRegistrationPage />} />
          <Route path="/academicReg" element={<AcademicInstitutionRegistrationPage />} />
          <Route path="/serviceacademia" element={<ServicesAcademiaPage />} />
          <Route path="/serviceurm" element={<ServicesURMPage />} />
          <Route path="/servicedei" element={<ServicesDEIPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;
