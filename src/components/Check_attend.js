//은빈 Check_task.js 제작

import React from 'react';
import '../css/ResetCSS.css';
import styles from '../css/Check_attend.module.css';
// import { Link } from 'react-router-dom';
// import CheckMenubar from './Check_menubar';

const Check_task = () => {
  return (
    <div className={styles.chkbox}>
      <p className={styles.chktitle}> 이번주 세션 공지 </p>
      <hr className={styles.divider} />
      <div className='speakertitle'>

      {/* <img
        id={styles.speaker}
        alt="스피커 아이콘"
        src="img/speaker.png"
        /> */}
      <p className={styles.choolchk}>
        {/* 수정필요 */}
        동덕여대와 함께하는 GIT 세션
      </p>
        </div>
      <div className={styles.zandi}></div>
      <p className={styles.dukrepo}>DUKSUNG REPOSITORY</p>
    </div>
  );
};

export default Check_task;
