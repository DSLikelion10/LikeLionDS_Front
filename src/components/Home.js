import React from 'react';
import '../css/ResetCSS.css';
import '../css/Home.css';

const Home = () => {
    return(
        <div class="chkbox">
            <div class="chkheader"> 
            </div>
            <p class="chktitle"> 이번주 세션 공지 </p>
                <hr margin="9px"/>
                <img
                    alt="스피커 아이콘"
                    src="img/speaker.png"
                    width="30px"
                    height="30px"
                />
                <p class ="choolchk">
                    동덕여대와 함께하는 GIT 세션
                </p>
         </div>
    );
};

export default Home;
