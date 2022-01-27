import React from 'react';
import '../css/ResetCSS.css';
import '../css/Menubar.css';

//태영 : Menubar 제작
const Menubar = () => {
  return (
    <div class="barBody">
      <div class="leftBar">
        <div id="imgBox">
          <img
            alt="홈 아이콘"
            src="img/likelion_DS_logo.png"
            width="60px"
            height="60px"
          />
        </div>
        <ul>
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
      </div>
      <div class="rightContent">뭐가들어갈지 몰라요</div>
    </div>
  );
};

export default Menubar;
