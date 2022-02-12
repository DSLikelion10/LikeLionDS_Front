import React from 'react';
import styles from '../css/Check_attend.module.css';
import { Link, Outlet, NavLink } from 'react-router-dom';

const Check_menubar = () => {
  return (
    <div className={styles.chkbox}>
      <div className={styles.chkheader}>
        <NavLink to="/checks" style={{ textDecoration: 'none' }}>
          <p className={styles.tasks}>과제 체크</p>
        </NavLink>
        <NavLink to="/checks/attend" style={{ textDecoration: 'none' }}>
          <p className={styles.attends}>출석 체크</p>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Check_menubar;
