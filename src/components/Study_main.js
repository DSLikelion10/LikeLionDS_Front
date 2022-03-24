import React from 'react';
import studystyle from '../css/Study.module.css';
import { Outlet } from 'react-router-dom';

const Study_main = () => {
  return (
    <div className={studystyle.studybody}>
      <Outlet />
    </div>
  );
};

export default Study_main;
