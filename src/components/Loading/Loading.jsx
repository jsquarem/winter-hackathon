import React, { useEffect } from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

export default function Loading({ user }) {
  console.log(user, '<-user in loading');
  const navigate = useNavigate();
  const profileID = user.teacherProfile;
  setTimeout(() => {
    navigate(`/profile/${profileID}`);
  }, 3000);

  return (
    <Container>
      <div className="loader">
        <h2 className="loadtext text-center">We're on our way!</h2>
        <ReactLoading
          className="loadbubble"
          type="bubbles"
          color="#BDD9BF"
          height={100}
          width={150}
        />

        <img
          className="t-rex mb-5"
          src="https://i.pinimg.com/originals/ee/de/0e/eede0eccaf59ddda3e629f98bbfd0a10.gif"
          alt="t-rex"
        />
        <div className="col-8 offset-2">
          <h2 className="loadtext mt-5 text-center">
            Sending you back to your profile page...
          </h2>
        </div>
      </div>
    </Container>
  );
}
