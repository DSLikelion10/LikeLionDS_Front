import React from 'react';
import '../css/ResetCSS.css';
import '../css/Menubar.css';
import Home from './Home';

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
            <li>마이페이지</li>
            <li>체크</li>
            <li>스터디</li>
            <li>코드라이언</li>
          </ul>
        </div>
        <div id="logout-imgdiv">
          <img alt="로그아웃 아이콘" src="img/logout_button.png" />
        </div>
      </div>
      <div class="rightContent">
        <Home />
      </div>
    </div>
  );
};

export default Menubar;
