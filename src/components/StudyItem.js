import React from 'react';
import studystyle from '../css/Study.module.css';

const StudyItem = () => {
  return (
    <div id={studystyle.studyItem}>
      <div id={studystyle.studyItemLeft}>
        <img alt="스터디 사진 예시" src="img/example1.png"></img>
      </div>
      <div id={studystyle.studyItemRight}>
        <h2>우주 최강 프론트팀</h2>
        <table>
          <tbody class={studystyle.table}>
            <tr>
              <th>멤버</th>
              <td>권은빈, 강태영, 김수정, 허은</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>01/13</td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <div>
                  우주 최강 프론트팀은 오늘도 은하 도장깨기를 하러
                  가는데눈누난난랄라 룰루 렐리루룰루룰 라라랄랄 라랄 랄라 우주
                  최강 프론트팀은 오늘도 은하 도장깨기를 하러 가는데눈누난난랄라
                  룰루 렐리루룰루룰 라라랄랄 라랄 랄라
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
