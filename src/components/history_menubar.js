import React from 'react';
import styles from '../css/Check_menubar.module.css';
import { Outlet, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

function Check_menubar() {
  const location = useLocation();
  console.log(location.pathname);

  //(location.pathname !== '/history/staff' ? isActive : false)
  return (
    <>
      <ul className={styles.header_list}>
        <li className={styles.header_item}>
          <NavLink
            exact
            style={({ isActive }) =>
              (location.pathname === '/history' ? isActive : false)
                ? { color: '#f2921d', textDecoration: 'none' }
                : { color: '#ffffff', textDecoration: 'none' }
            }
            to="/history"
          >
            덕성멋사 소개
          </NavLink>
        </li>
        <li className={styles.header_item}>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { color: '#f2921d', textDecoration: 'none' }
                : { color: '#ffffff', textDecoration: 'none' }
            }
            to="/history/staff"
          >
            운영진 소개
          </NavLink>
        </li>
        <li className={styles.header_item}>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { color: '#f2921d', textDecoration: 'none' }
                : { color: '#ffffff', textDecoration: 'none' }
            }
            to="/history/9th"
          >
            연혁
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Check_menubar;
