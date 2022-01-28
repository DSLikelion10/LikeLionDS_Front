import React from 'react';
import '../css/ResetCSS.css';
import '../css/Home.css';

const Home = () => {
    return(
        <div class="chkbox">
            <div class="chkheader">
            <p class ="headerchk">과제 체크</p>
            <p class ="headerchk">출석 체크</p> 
            </div>
            <p class="chktitle"> 이번주 세션 공지 </p>
                <hr class="divider" />
                <img class="speaker"
                    alt="스피커 아이콘"
                    src="img/speaker.png"
                />
                <p class ="choolchk">
                    동덕여대와 함께하는 GIT 세션
                </p>
            <div class="Zandi">
                
            </div>
         </div>
    );
};

export default Home;
