import React from 'react';
import styles from '../css/Check_menubar.module.css';
import { useParams } from 'react-router-dom';
import { Outlet, NavLink } from 'react-router-dom';

function Check_menubar() {
  const params = useParams();
  console.log(params);

  return (
    <>
      <ul className={styles.header_list}>
        <li className={styles.header_item}>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { color: '#f2921d', textDecoration: 'none' }
                : { color: '#ffffff', textDecoration: 'none' }
            }
            to="/checks"
          >
            과제 체크
          </NavLink>
        </li>
        <li className={styles.header_item}>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? { color: '#f2921d', textDecoration: 'none' }
                : { color: '#ffffff', textDecoration: 'none' }
            }
            to="/checks/attend"
          >
            출석 체크
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Check_menubar;
