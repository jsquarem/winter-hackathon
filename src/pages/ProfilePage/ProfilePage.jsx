import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import teacherService from '../../utils/teacherService';
import Container from 'react-bootstrap/Container';
import CircleAddButton from '../../components/CircleAddButton/CircleAddButton';
import ProjectThumbNail from '../../components/ProjectThumbNail/ProjectThumbNail';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import './ProfilePage.css';

export default function ProfilePage({ user }) {
  const [projects, setProjects] = useState([
    {
      projectTitle: 'Help our class get a whiteboard!',
      projectDescription:
        'Our class needs a new whiteboard! Help us create/learn better and avoid harmful dust!',
      imageURL:
        'https://catcollection7-11.s3.us-east-2.amazonaws.com/classroom1-888x500.png'
    },
    {
      projectTitle: 'Microscopes. Macro Hopes.',
      projectDescription:
        'The singlemost necessary educational tool of all time. We must have microscopes to see tiny things. If we cannot see tiny objects, we cannot see the future.',
      imageURL:
        'https://catcollection7-11.s3.us-east-2.amazonaws.com/classroom2-888x500.png'
    }
  ]);

  const [teacher, setTeacher] = useState({
    schoolEmail: '',
    phone: '',
    bio: '',
    school: {
      name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      phone: ''
    },
    projects: []
  });

  const getTeacher = async (id) => {
    const teacher = await teacherService.getTeacherData(id);
    console.log(teacher, '<-teacher in getteacher');
    setTeacher(teacher);
    return teacher;
  };

  useEffect(() => {
    const teacher = getTeacher(user._id);
  }, []);
  console.log(user, '<-user in ProfilePage');
  console.log(teacher, '<-teacher');

  return (
    <Container>
      <BreadCrumb step={2} />
      <div className="row mt-3">
        <div className="col-6">
          <img
            style={{ width: '100%' }}
            src="https://catcollection7-11.s3.us-east-2.amazonaws.com/teacher.png"
          />
        </div>
        <div className="col-6 pt-5">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <h5>{teacher.school.name}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-4">
          <div className="col-auto">
            <h6>My Projects ({teacher.projects.length})</h6>
            {teacher.projects.length > 0 ? (
              <div className="col-12 thumbnail-container p-2 rounded pt-3">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center mb-4">
                    <ProjectThumbNail project={teacher.projects[0]} />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link to="/projects">
                  <CircleAddButton />
                </Link>
                <p>Add a project</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h6 className="mt-5">Other Projects at my School...</h6>
          <div className="col-12 thumbnail-container p-2 rounded pt-3">
            <div className="row">
              <div className="col-12 d-flex justify-content-center mb-4">
                <ProjectThumbNail project={projects[0]} />
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <ProjectThumbNail project={projects[1]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
