import React from 'react';
import '../css/ResetCSS.css';
import '../css/Menubar.css';
import Home from './Home';
import Check_attend from './Check_attend';
import Mypage from './Mypage';
import Study_main from './Study_main';
import { Link } from 'react-router-dom';

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
            <img alt="마이페이지" src="img/mypage_button.png" />
          </li>
          <li>
            <img alt="체크" src="img/check_button.png" />
          </li>
          <li>
            <img alt="스터디" src="img/study_button.png" />
          </li>
          <li>
            <img alt="코드라이언" src="img/codelion_button.png" />
          </li>
        </ul>
        <div class="burger">
          <ul>
            <li>
              <Link to="/">마이페이지</Link>
            </li>
            <li>
              <Link to="/check_task">체크</Link>
            </li>
            <li>
              <Link to="/study_main">스터디</Link>
            </li>
            <li>
              <Link to="">코드라이언</Link>
            </li>
          </ul>
        </div>
        <div id="logout-imgdiv">
          <img alt="로그아웃 아이콘" src="img/logout_button.png" />
        </div>
      </div>
      <div class="rightContent">{}</div>
    </div>
  );
};

export default Menubar;
