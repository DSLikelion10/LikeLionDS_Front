import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudyItem from './StudyItem';
import studystyle from '../css/Study.module.css';
import Study from './Study';
import { Link } from 'react-router-dom';

const StudyList = () => {
  const [studys, setStudys] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/study')
      .then((res) => {
        setStudys(res.data);
      })
      .catch((error) => console.log('Network Error : ', error));
  }, []);

  return (
    <div>
      <h1>멋사자들의 활동 모습</h1>
      <hr />
      <div className={studystyle.writediv}>
        {/* 조건문으로 운영진일 경우 글쓰기 버튼 생성 */}
        <Link to="/study_main/new">
          <button id={studystyle.studywrite} style={{ cursor: 'pointer' }}>
            글쓰기
          </button>
        </Link>
      </div>
      <div className={studystyle.contentdiv}>
        {studys.map((study) => (
          <StudyItem study={study} key={study.id} />
        ))}
      </div>
    </div>
  );
};

export default StudyList;
