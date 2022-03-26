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
import ProjectList from './components/ProjectList';
import ProjectCreate from './components/ProjectCreate';
import ProjectView from './components/ProjectView';
import Study from './components/Study';
import StudyNewForm from './components/StudyNewForm';
import StudyList from './components/StudyList';
import { getCookie } from './util/cookie';
import { Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendarpg';

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
            <Route path="/checks" element={<CheckMenubar />}>
              <Route index element={<CheckTask />} />
              <Route path="attend" element={<CheckAttend />}></Route>
            </Route>
            {/* 은빈 마이페이지 캘린더로 라우터 변경 */}
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/study_main" element={<StudyMain />}>
              <Route index element={<StudyList />} />
              <Route path=":studyId" element={<Study />} />
              <Route path="new" element={<StudyNewForm />} />
            </Route>
            {/* 은 과제제출 페이지, 제출완료 페이지, 운영진과제창 라우터 설정 */}
            <Route path="/projectlist" element={<ProjectList />}></Route>
            <Route path="/projectcreate" element={<ProjectCreate />}></Route>
            <Route path="/projectview" element={<ProjectView />}></Route>
          </Route>
        )}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
};

export default App;
