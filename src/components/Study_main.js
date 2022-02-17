import React from 'react';
import StudyItem from './StudyItem';
import studystyle from '../css/Study.module.css';

const Study_main = () => {
  return (
    <div>
      <h1>팀별 스터디 진행 모습</h1>
      <hr />
      <button>글쓰기</button>
      <StudyItem></StudyItem>
    </div>
  );
};

export default Study_main;
