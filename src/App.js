import React from 'react';
import Menubar from './components/Menubar';
import Home from './components/Home';
import CheckTask from './components/Check_task';
import CheckAttend from './components/Check_attend';
import Mypage from './components/Mypage';
import StudyMain from './components/Study_main';
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menubar />}>
          <Route index element={<Home />} />
          <Route path="/check_task" element={<CheckTask />}></Route>
          <Route path="/check_attend" element={<CheckAttend />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/study_main" element={<StudyMain />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
};

export default App;
