//은빈 Home.js 제작
import React from 'react';
import '../css/ResetCSS.css';
import '../css/Home.css';

const Home = () => {
    return(
        <div>
            <p className='h-title'> 이번주 명예의 전당 </p>
                <hr className="divider" />
                <div className="winner">

                </div>
            <p className="h-title"> 대표의 한 마디 </p>
                <hr className="divider" />
                <img class="speaker"
                alt="스피커 아이콘"
                src="img/speaker.png"/>
            <p className="h-title"> 일정 캘린더 </p>
                <hr className="divider" />

                <p className ="choolchk">
                </p>
                    동덕여대와 함께하는 GIT 세션
            <div className="Zandi">
                
            </div>
         </div>
    );
}; 

export default Home;
