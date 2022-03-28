import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import studystyle from '../css/Study.module.css';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../util/cookie';

const StudyNewForm = () => {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState(getCookie('userName'));
  const [studyText, setStudyText] = useState('');
  const [studyDate, setStudyDate] = useState('');
  const [img, setImg] = useState('');

  const navigate = useNavigate();
  const formData = new FormData();

  // useEffect(() => {
  //   console.log(getCookie('mytoken'));
  //   console.log(getCookie('userName'));
  // });

  const handleSubmit = (e) => {
    console.log('눌린거 맞지?');
    e.preventDefault();

    formData.append('title', title);
    formData.append('studyText', studyText);
    formData.append('username', username);
    formData.append('studyDate', studyDate);
    formData.append('img', img);

    console.log(img);
    axios
      .post('http://localhost:3001/study', formData)
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
      setUsername(getCookie('userName'));
    } else if (name === 'studyDate') {
      setStudyDate(value);
    } else if (name === 'studyText') {
      setStudyText(value);
    } else if (name === 'img') {
      // console.log(e.target.files[0]);
      setImg(e.target.files[0]);
    }
  }, []);

  return (
    <div>
      <h1 class={studystyle.detailtitle}>새 글 작성하기</h1>
      <hr />
      <form
        onSubmit={handleSubmit}
        class={studystyle.studynewform}
        encType="multipart/form-data"
      >
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
          readOnly
          class={studystyle.stip}
          type="text"
          name="username"
          value={getCookie('userName')}
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
          name="img"
          onChange={handleChange}
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
