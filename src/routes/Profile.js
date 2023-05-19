import { useNavigate } from 'react-router-dom';
import { authService } from '../fbase';
import React from 'react';

const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  };
  return (
    <> <button onClick={onLogOutClick}> 로 그 아 웃 </button></>
  ); };

export default Profile;
