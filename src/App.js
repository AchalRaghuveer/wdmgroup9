import React from 'react';
import Login from './Components/Login/login';
import RolePage from './Components/Role/role';
import ForgotPasswordPage from './Components/ForgotPassword/forgotpassword';
import HomePage from './Components/Home/home';
import AboutUsPage from './Components/AboutUs/aboutus';
import ContactUsPage from './Components/Contact/contact';
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
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;
