import React, { useState } from 'react';
import StudyItem from './StudyItem';
import studystyle from '../css/Study.module.css';

const Study_main = () => {
  const [studys, setStudys] = useState([
    {
      id: 1,
      title: '우주 최강 프론트팀',
      username: '권은빈, 강태영, 김수정, 허은',
      studyDate: '01/13',
      studyText:
        '우주 최강 프론트팀은 오늘도 은하 도장깨기를 하러 가는데눈누난난랄라 룰루 렐리루룰루룰 라라랄랄 라랄 랄라 우주 최강 프론트팀은 오늘도 은하 도장깨기를 하러 가는데눈누난난랄라 룰루 렐리루룰루룰 라라랄랄 라랄 랄라',
    },
    {
      id: 2,
      title: '우주 최강 프론트팀',
      username: '권은빈, 강태영, 김수정, 허은',
      studyDate: '01/13',
      studyText:
        '우주 최강 프론트팀은 오늘도 은하 도장깨기를 하러 가는데눈누난난랄라 룰루 렐리루룰루룰 라라랄랄 라랄 랄라 우주 최강 프론트팀은 오늘도 은하 도장깨기를 하러 가는데눈누난난랄라 룰루 렐리루룰루룰 라라랄랄 라랄 랄라',
    },
    {
      id: 3,
      title: '우주 최강 프론트팀',
      username: 'taeyoung',
      studyDate: '01/13',
      studyText:
        '나도 한때는 그이의 손을 잡고 내가 온 세상 주인공이 된 듯 꽃송이의 꽃잎 하나하나까지 모두 날 위해 피어났지',
    },
    {
      id: 4,
      title: '우주 최강 프론트팀',
      username: 'taeyoung',
      studyDate: '01/13',
      studyText:
        '나도 한때는 그이의 손을 잡고 내가 온 세상 주인공이 된 듯 꽃송이의 꽃잎 하나하나까지 모두 날 위해 피어났지',
    },
    {
      id: 5,
      title: '우주 최강 프론트팀',
      username: 'taeyoung',
      studyDate: '01/13',
      studyText:
        '나도 한때는 그이의 손을 잡고 내가 온 세상 주인공이 된 듯 꽃송이의 꽃잎 하나하나까지 모두 날 위해 피어났지',
    },
    {
      id: 6,
      title: '우주 최강 프론트팀',
      username: 'taeyoung',
      studyDate: '01/13',
      studyText:
        '나도 한때는 그이의 손을 잡고 내가 온 세상 주인공이 된 듯 꽃송이의 꽃잎 하나하나까지 모두 날 위해 피어났지',
    },
    {
      id: 7,
      title: '우주 최강 프론트팀',
      username: 'taeyoung',
      studyDate: '01/13',
      studyText:
        '나도 한때는 그이의 손을 잡고 내가 온 세상 주인공이 된 듯 꽃송이의 꽃잎 하나하나까지 모두 날 위해 피어났지',
    },
    {
      id: 8,
      title: '우주 최강 프론트팀',
      username: 'taeyoung',
      studyDate: '01/13',
      studyText:
        '나도 한때는 그이의 손을 잡고 내가 온 세상 주인공이 된 듯 꽃송이의 꽃잎 하나하나까지 모두 날 위해 피어났지',
    },
    {
      id: 9,
      title: '우주 최강 프론트팀',
      username: 'taeyoung',
      studyDate: '01/13',
      studyText:
        '나도 한때는 그이의 손을 잡고 내가 온 세상 주인공이 된 듯 꽃송이의 꽃잎 하나하나까지 모두 날 위해 피어났지',
    },
  ]);
  return (
    <div className={studystyle.studybody}>
      <h1>팀별 스터디 진행 모습</h1>
      <hr />
      <div className={studystyle.writediv}>
        {/* 조건문으로 운영진일 경우 글쓰기 버튼 생성 */}
        <button id={studystyle.studywrite}>글쓰기</button>
      </div>
      <div className={studystyle.contentdiv}>
        {studys.map((study) => (
          <StudyItem study={study} key={study.id} />
        ))}
      </div>
    </div>
  );
};

export default Study_main;
