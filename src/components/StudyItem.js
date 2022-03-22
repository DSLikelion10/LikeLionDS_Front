import React from 'react';
import studystyle from '../css/Study.module.css';

const StudyItem = ({ study }) => {
  return (
    <div id={studystyle.studyItem}>
      <div id={studystyle.studyItemLeft}>
        <img alt="스터디 사진 예시" src="img/example1.png" width="300px"></img>
      </div>
      <div id={studystyle.studyItemRight}>
        <h2>{study.title}</h2>
        <table>
          <tbody class={studystyle.table}>
            <tr>
              <th>멤버</th>
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
                  {study.studyText.length < 50
                    ? study.studyText
                    : study.studyText.slice(0, 35) + '...'}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudyItem;
