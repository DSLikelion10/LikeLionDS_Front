import React from 'react';
import Menubar from './components/Menubar';
import Home from './components/Home';
import CheckTask from './components/Check_task';
import CheckAttend from './components/Check_attend';
import CheckMenubar from './components/Check_menubar';
import Mypage from './components/Mypage';
import StudyMain from './components/Study_main';
import Login from './components/Login';
import Signup from './components/Signup';
import Study from './components/Study';
import StudyNewForm from './components/StudyNewForm';
import StudyList from './components/StudyList';
import { getCookie } from './util/cookie';
import { Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendarpg';
//은 히스토리 페이지 추가
import HistoryMenubar from './components/history_menubar';
import History from './components/history';
import Likelion10th from './components/likelion10th';
import Likelion9th from './components/likelion9th';
import Likelion8th from './components/likelion8th';
import HistoryStaff from './components/history_staff';

const App = () => {
  //로그인 상태 판별
  let isAuthorized = getCookie('mytoken') !== undefined ? true : false;

  return (
    <>
      <Routes>
        {/* 비로그인 상태면 어느 페이지를 들어가도 로그인 페이지로 연결되도록 함 */}
        {!isAuthorized ? (
          <Route path="/*" element={<Login />}></Route>
        ) : (
          <Route path="/" element={<Menubar />}>
            <Route index element={<Home />} />
            {/* 태영 : 과제체크 페이지와 출석 체크 페이지 묶음 */}
            {/* <Route path="/checks" element={<CheckMenubar />}>
              <Route index element={<CheckTask />} />
              <Route path="attend" element={<CheckAttend />}></Route>
            </Route> */}
            {/* 은빈 마이페이지 캘린더로 라우터 변경 */}
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/study_main" element={<StudyMain />}>
              <Route index element={<StudyList />} />
              <Route path=":studyId" element={<Study />} />
              <Route path="new" element={<StudyNewForm />} />
            </Route>
            {/* 은 히스토리 페이지 라우터 설정 */}
            <Route path="/history" element={<HistoryMenubar />}>
              <Route index element={<History />} />
              <Route path="staff" element={<HistoryStaff />}></Route>
              <Route path="9th" element={<Likelion9th />}></Route>
              {/* <Route path="8th" element={<Likelion8th />}></Route>
              <Route path="10th" element={<Likelion10th />}></Route> */}
            </Route>
          </Route>
        )}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
};

export default App;
