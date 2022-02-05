//은빈 Home.js 제작
import React from 'react';
import '../css/ResetCSS.css';
import '../css/Home.css';

const Home = () => {
    return(
        <div class="chkbox">
            <p class="chktitle"> 이번주 명예의 전당 </p>
                <hr class="divider" />
                <img class="speaker"
                    alt="스피커 아이콘"
                    src="img/speaker.png"
                />
            <p class="chktitle"> 대표님의 한 말씀 </p>
                <hr class="divider" />
                
            <p class="chktitle"> 일정 캘린더 </p>
                <hr class="divider" />
                <p class ="choolchk">
                    동덕여대와 함께하는 GIT 세션
                </p>
            {/* <div class="Zandi"> */}
                
            {/* </div> */}
         </div>
    );
};

export default Home;
