import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import NewProfilePage from '../NewProfilePage/NewProfilePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import userService from '../../utils/userService';
import Project from '../Project/Project';
import './App.css';

export default function App() {
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

  const handleTeacherProfileUpdate = (updatedTeacherProfile) => {
    setUser({
      ...user,
      teacherProfile: updatedTeacherProfile
    });
  };

  return (
    <>
      <NavBar />
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
            <NewProfilePage
              user={user}
              handleUserUpdate={handleUserUpdate}
              handleTeacherProfileUpdate={handleTeacherProfileUpdate}
            />
          }
        />
        <Route path="/profile/" element={<ProfilePage user={user} />} />
        {/* <Route path="/*" element={<PageNotFound />} /> */}
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}
