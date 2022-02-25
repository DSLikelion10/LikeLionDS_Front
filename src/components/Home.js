//은빈 Home.js 제작
import React from 'react';
import '../css/ResetCSS.css';
import '../css/Home.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import googleCalendarPlugin from '@fullcalendar/google-calendar';

const Home = () => {
    const apikey = new FullCalendar(process.env.DSLL_CALENDAR_API_KEY);
    const eventSources = [
        { 
            googleCalendarId: 'https://calendar.google.com/calendar/embed?src=duksung%40likelion.org&ctz=Asia%2FSeoul',
            className : 'dsll',
            color: "#00a178"
        } ]

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
                    googleCalendarApikey={apikey}
                    eventSources={eventSources}
                    defaultView="dayGridMonth" 
                    plugins={[
                         dayGridPlugin,
                        //  googleCalendarPlugin
                     ]}
                  />
                </div>
                <div className='textcontainer'>
                    <p className='ListTitle'> · 운영진 OT </p>
                </div>

         </div>
    );
}; 

export default Home;
