import React from 'react';
import '../css/ResetCSS.css';
import '../css/Menubar.css';
import { Link, Outlet } from 'react-router-dom';

//태영 : Menubar 제작
const Menubar = () => {
  return (
    <div class="barBody">
      <div class="leftBar">
        <div id="home-imgdiv">
          <img
            alt="홈 아이콘"
            src="img/likelion_DS_logo.png"
            width="60px"
            height="60px"
          />
        </div>
        <ul id="menubar">
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
        <div class="burger">
          <ul>
            <li>
              <Link to="/mypage">마이페이지</Link>
            </li>
            <li>
              <Link to="/check_task">체크</Link>
            </li>
            <li>
              <Link to="/study_main">스터디</Link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.codelion.net/"
                rel="noreferrer"
              >
                코드라이언
              </a>
            </li>
          </ul>
        </div>
        <div id="logout-imgdiv">
          <img alt="로그아웃 아이콘" src="img/logout_button.png" />
        </div>
      </div>
      <div class="rightContent">
        <Outlet />
      </div>
    </div>
  );
};

export default Menubar;
