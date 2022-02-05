//은빈 Check_task.js 제작

import React from 'react';
import '../css/ResetCSS.css';
import '../css/Check_task.css';
import { Link } from 'react-router-dom';

const Check_task = () => {
  return (
    <div className='chkbox'>
        <div className="chkheader">
        <Link to = '/Check_task' style={{ textDecoration: 'none' }}>
        <p className ="tasks">과제 체크</p>
        </Link>
        <Link to = '/Check_attend' style={{ textDecoration: 'none' }}>
        <p className ="attends">출석 체크</p>
        </Link> 
        </div>
        <p className="chktitle"> 이번주 제출 과제 공지 ( ~ 3/23 ) </p>
            <hr className="divider" />
            <img className="speaker"
                alt="스피커 아이콘"
                src="img/speaker.png"
            />
            <p className ="choolchk">
                {/* 수정필요 */}
                동덕여대와 함께하는 GIT 세션
            </p>
        <div className="Zandi">
        </div>
        <p className='DR'>DUKSUNG REPOSITORY</p>
     </div>
);
};

export default Check_task;