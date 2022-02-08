import React from 'react';
import '../css/ResetCSS.css';
import styles from '../css/Menubar.module.css';
import { Link, Outlet, useLocation } from 'react-router-dom';

//태영 : Menubar 제작
const Menubar = () => {
  const location = useLocation();

  const navColorChange = (e) => {
    switch (location.pathname) {
      case '/study_main':
        console.log(location.pathname);
        break;
      // no default
    }
  };

  return (
    <div className={styles.barBody}>
      <div className={styles.leftBar}>
        <div id={styles.homeImgdiv}>
          <img
            alt="홈 아이콘"
            src="img/likelion_DS_logo.png"
            width="60px"
            height="60px"
          />
        </div>
        <ul id={styles.menubar}>
          <li>
            <Link to="/mypage">
              <img alt="마이페이지" src="img/mypage_button.png" />
            </Link>
          </li>
          <li>
            <Link to="/check_task">
              <img alt="체크" src="img/check_button.png" />
            </Link>
          </li>
          <li>
            <Link to="/study_main">
              <img alt="스터디" src="img/study_button.png" />
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.codelion.net/"
              rel="noreferrer"
            >
              <img alt="코드라이언" src="img/codelion_button.png" />
            </a>
          </li>
        </ul>
        <div className={styles.burger}>
          <ul>
            <li onClick={navColorChange}>
              <Link className={styles.clicked} to="/mypage">
                마이페이지
              </Link>
            </li>
            <li id="check_text" onClick={navColorChange}>
              <Link className={styles.clicked} to="/check_task">
                체크
              </Link>
            </li>
            <li id="study_text" onClick={navColorChange}>
              <Link className={styles.clicked} to="/study_main">
                스터디
              </Link>
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
            <img alt="로그아웃 아이콘" src="img/logout_button.png" />
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
