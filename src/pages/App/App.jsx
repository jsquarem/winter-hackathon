import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from '../HomePage/HomePage';
import GetStarted from '../GetStarted/GetStarted.jsx';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import NewProfilePage from '../NewProfilePage/NewProfilePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import userService from '../../utils/userService';
import Project from '../Project/Project';
import LoadingScreen from '../../components/Loading/Loading'
import './App.css';


export default function App() {
  const [loading, setLoading] = useState(true)

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

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
    { loading === false ? (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/getstarted" element={<GetStarted />} />
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
      <Route 
        path='/project' 
        element={<Project/>}/>
    </Routes>
    ) : (
      <LoadingScreen />
    )}
    </>
  );
}

