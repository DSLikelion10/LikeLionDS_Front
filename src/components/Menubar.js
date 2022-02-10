import React from 'react';
import activeMypage from '../img/click_mypage_button.png';
import activeCheck from '../img/click_check_button.png';
import activeStudy from '../img/click_study_button.png';
import '../css/ResetCSS.css';
import styles from '../css/Menubar.module.css';
import { Link, Outlet, NavLink } from 'react-router-dom';

//태영 : Menubar 제작
const Menubar = () => {
  const Active = ({ isActive }) => {
    return { color: isActive ? '#f2921d' : '' };
  };

  return (
    <div className={styles.barBody}>
      <div className={styles.leftBar}>
        <div id={styles.homeImgdiv}>
          <Link to="/">
            <img
              alt="홈 아이콘"
              src="img/likelion_DS_logo.png"
              width="60px"
              height="60px"
            />
          </Link>
        </div>
        <ul id={styles.menubar}>
          <li>
            <NavLink
              to="/mypage"
              className={styles.mypageLi}
              style={({ isActive }) => ({
                backgroundImage: isActive ? `url(${activeMypage})` : '',
              })}
            >
              {/* <img alt="마이페이지" src="img/mypage_button.png" /> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="{슈라랄라랄}"
              className={styles.checkLi}
              style={({ isActive }) => ({
                backgroundImage: isActive ? `url(${activeCheck})` : '',
              })}
            >
              {/* <img alt="체크" src="img/check_button.png" /> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/study_main"
              style={({ isActive }) => ({
                backgroundImage: isActive ? `url(${activeStudy})` : '',
              })}
              className={styles.studyLi}
            >
              {/* <img alt="스터디" src="img/study_button.png" /> */}
            </NavLink>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.codelion.net/"
              rel="noreferrer"
            >
              {/* <img alt="코드라이언" src="img/codelion_button.png" /> */}
              <div className={styles.codelionLi}></div>
            </a>
          </li>
        </ul>
        <div className={styles.burger}>
          <ul>
            <li>
              <NavLink style={Active} className={styles.clicked} to="/mypage">
                마이페이지
              </NavLink>
            </li>
            <li id="check_text">
              <NavLink
                style={Active}
                className={styles.clicked}
                to="/check_task"
              >
                체크
              </NavLink>
            </li>
            <li id="study_text">
              <NavLink
                style={Active}
                className={styles.clicked}
                to="/study_main"
              >
                스터디
              </NavLink>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.codelion.net/"
                rel="noreferrer"
                className={styles.clicked}
              >
                코드라이언
              </a>
            </li>
          </ul>
        </div>
        <div id={styles.logoutImgdiv}>
          <Link to="/login">
            {/* <img alt="로그아웃 아이콘" src="img/logout_button.png" /> */}
            <div className={styles.logoutLi}></div>
          </Link>
        </div>
      </div>
      <div className={styles.rightContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default Menubar;
