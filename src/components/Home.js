//은빈 Home.js 제작
import React from 'react';
import '../css/ResetCSS.css';
import '../css/Home.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Home = () => {
    return(
        <div>
            <p className='h-title'> 이번주 명예의 전당 </p>
                <hr className="divider" />
                <div className="winner">

                </div>
            <p className="h-title"> 대표의 한 마디 </p>
            <hr className="divider" />
            <div id = "speakercontainer"> 
            <img className="speaker"
                alt="스피커 아이콘"
                src="img/speaker.png"/>
            <p className ="choolchk">
                여대톤이 곧 열립니다! 모두들 잘 준비하고 계신가요?
            </p>
                </div>
            <p className="h-title"> 일정 캘린더 </p>
                <hr className="divider" />
                <div className="Calcontainer">
                  <FullCalendar 
                    defaultView="dayGridMonth" 
                    plugins={[ dayGridPlugin ]}
                  />
                </div>
                <div className='textcontainer'>
                    <p className='ListTitle'> · 운영진 OT </p>
                </div>

         </div>
    );
}; 

export default Home;
