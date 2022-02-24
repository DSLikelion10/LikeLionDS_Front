import React from 'react';
import StudyItem from './StudyItem';
import studystyle from '../css/Study.module.css';

const Study_main = () => {
  return (
    <div className={studystyle.studybody}>
      <h1>팀별 스터디 진행 모습</h1>
      <hr />
      <div className={studystyle.writediv}>
        {/* 조건문으로 운영진일 경우 글쓰기 버튼 생성 */}
        <button id={studystyle.studywrite}>글쓰기</button>
      </div>
      <StudyItem></StudyItem>
    </div>
  );
};

export default Study_main;
