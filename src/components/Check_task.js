//은빈 Check_task.js 제작

import React from 'react';
import '../css/ResetCSS.css';
import styles from '../css/Check_task.module.css';
// import { Link } from 'react-router-dom';
// import CheckMenubar from './Check_menubar';

const Check_task = () => {
  return (
    <div className={styles.chkbox}>
      <p className={styles.chktitle}> 이번주 제출 과제 공지 ( ~ 3/23 ) </p>
      <hr className={styles.divider} />
      {/* <img
        className={styles.speaker}
        alt="스피커 아이콘"
        src="img/speaker.png"
      /> */}
      <p className={styles.choolchk}>
        {/* 수정필요 */}
        여대톤이 곧 열립니다! 잘 준비하고 계신가요?
      </p>
      <div className={styles.Zandi}></div>
      <p className={styles.DR}>DUKSUNG REPOSITORY</p>
    </div>
  );
};

export default Check_task;
