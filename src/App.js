import React from 'react';
import Menubar from './components/Menubar';
import Home from './components/Home';
import Check_task from './components/Check_task';
import Check_attend from './components/Check_attend';
import Mypage from './components/Mypage';
import Study_main from './components/Study_main';
import Login from './components/Login';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}></Route>
      <Route path="/check_task" element={<Check_task />}></Route>
      <Route path="/check_attend" element={<Check_attend />}></Route>
      <Route path="/mypage" element={<Mypage />}></Route>
      <Route path="/study_main" element={<Study_main />}></Route>
      <Route path="/login" element={<Login />}></Route>

    </Routes>
  );
};

export default App;
