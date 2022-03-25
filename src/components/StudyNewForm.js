import React, { useCallback, useState } from 'react';
import axios from 'axios';
import studystyle from '../css/Study.module.css';
import { useNavigate } from 'react-router-dom';

const StudyNewForm = () => {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [studyText, setStudyText] = useState('');
  const [studyDate, setStudyDate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/study', {
        title: title,
        username: username,
        studyText: studyText,
        studyDate: studyDate,
      })
      .then((res) => {
        navigate('/study_main');
        console.log('post 성공을 축하드립니다 -이곳은 멋사 본부-');
      })
      .catch((error) => console.log('Network Error : ', error));
  };

  const handleChange = useCallback((e) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'title') {
      setTitle(value);
    } else if (name === 'username') {
      setUsername(value);
    } else if (name === 'studyDate') {
      setStudyDate(value);
    } else if (name === 'studyText') {
      setStudyText(value);
    }
  }, []);

  return (
    <div>
      <h1 class={studystyle.detailtitle}>새 글 작성하기</h1>
      <hr />
      <form onSubmit={handleSubmit} class={studystyle.studynewform}>
        <label>제목</label>
        <br />
        <input
          class={studystyle.stip}
          placeholder="제목을 입력해주세요"
          type="text"
          style={{ width: '70vh' }}
          value={title}
          name="title"
          onChange={handleChange}
        ></input>
        <br />
        <label>작성자</label>
        <br />
        <input
          class={studystyle.stip}
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        ></input>
        <br />
        <label>날짜</label>
        <br />
        <input
          type="date"
          class={studystyle.stip}
          name="studyDate"
          value={studyDate}
          onChange={handleChange}
        ></input>
        <br />
        <label>내용</label>
        <br />
        <textarea
          style={{
            width: '100vh',
            height: '50px',
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
          class={studystyle.stip}
          name="studyText"
          value={studyText}
          onChange={handleChange}
        ></textarea>
        <br />
        <label>사진</label>
        <br />
        <input
          type="file"
          accept="image/*"
          style={{ margin: '10px 0 15px 0' }}
        ></input>
        <br />
        <div class={studystyle.savebutton}>
          <button class={studystyle.stbt} type="submit">
            저장하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudyNewForm;
