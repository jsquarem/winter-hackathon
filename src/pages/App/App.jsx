import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import Campaign from '../Campaign/Campaign';

function App() {
  const [user, setUser] = useState(userService.getUser());
  console.log(user, '<-user in app');
  
  const handleSignUpOrLogin = () => {
    setUser(userService.getUser());
  };
  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      {/* <Route path="/*" element={<PageNotFound />} /> */}
      <Route 
        path='/campaign' 
        element={<Campaign/>}/>
    </Routes>
  );
}

export default App;
