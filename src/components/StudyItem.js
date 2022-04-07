import React, { useEffect, useState } from 'react';
import studystyle from '../css/Study.module.css';
import example1 from '../img/example1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StudyItem = ({ study }) => {
  const [imgurl, setImgurl] = useState('');
  useEffect(() => {
    axios
      .get(`http://localhost:3001/study/studies/${study.id}`)
      .then((res) => {
        const hope = res.data.img.data;
        const img_url = [];
        for (let i = 8; i < hope.length; i++) {
          console.log(String.fromCharCode(hope[i]));
          img_url.push(String.fromCharCode(hope[i]));
        }
        setImgurl('http://localhost:3001/' + img_url.join(''));
      })
      .catch((error) => console.log('Network Error : ', error));
  }, []);

  return (
    <Link to={`/study_main/${study.id}`} style={{ textDecoration: 'none' }}>
      <div id={studystyle.studyItem}>
        <div id={studystyle.studyItemLeft}>
          <img
            alt="스터디 사진 예시"
            src={imgurl}
            width="300px"
            height="200px"
          ></img>
        </div>
        <div id={studystyle.studyItemRight}>
          <h2 id={studystyle.title}>{study.title}</h2>
          <table>
            <tbody class={studystyle.table}>
              <tr>
                <th>작성자</th>
                <td>{study.username}</td>
              </tr>
              <tr>
                <th>날짜</th>
                <td>{study.studyDate}</td>
              </tr>
              <tr>
                <th>내용</th>
                <td>
                  <div>
                    {study.studyText.length < 73
                      ? study.studyText
                      : study.studyText.slice(0, 70) + '...'}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Link>
  );
};

export default StudyItem;
