import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import NewProfilePage from '../NewProfilePage/NewProfilePage';
import userService from '../../utils/userService';

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

  const handleUserUpdate = (updatedUser) => {
    setUser({
      ...user,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName
    });
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
      <Route
        path="/profile/new"
        element={
          <NewProfilePage user={user} handleUserUpdate={handleUserUpdate} />
        }
      />
      {/* <Route path="/*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default App;
