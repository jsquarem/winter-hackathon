import React, { useEffect, useState } from 'react';
import teacherService from '../../utils/teacherService';
import CircleAddButton from '../../components/CircleAddButton/CircleAddButton';

export default function ProfilePage({ user }) {
  const [projects, setProjects] = useState([]);
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
    if (!user.teacherProfile) {
      const teacher = getTeacher(user._id);
    } else {
      const teacher = user.teacherProfile;
    }
  }, []);
  console.log(user, '<-user in ProfilePage');
  console.log(teacher, '<-teacher');

  return (
    <>
      <h1>{user.firstName}'s Profile</h1>
      <h3>{teacher.school.name}</h3>
      <CircleAddButton url="url" />
    </>
  );
}
