// 수정 : Login.js 제작
import '../css/ResetCSS.css';
import styles from '../css/Login.module.css';
import { Link } from 'react-router-dom';
import {
  faUser,
  faLock,
} from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome/index';
import React, { useState } from 'react';
import axios from 'axios';
import { getCookie, setCookie } from '../util/cookie';

const Login = () => {
  const [inputId, setInputId] = useState(''); //사용자가 입력한 id값
  const [inputPwd, setInputPwd] = useState(''); //사용자가 입력한 pwd값

  const send_param = {
    userID: inputId,
    userPW: inputPwd,
  };

  const LoginHandle = () => {
    axios
      .post('http://localhost:3001/auth/login', send_param)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.userID);
        const userID = response.data.userID;
        if (response.data.error) {
          alert('로그인 실패!');
        } else {
          alert('로그인 성공!');
          const token = response.data.token;
          setCookie('mytoken', token);
          setCookie('userName', userID);
          //console.log(token);
          window.location.replace('/');
        }
      });
  };
  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.loginTitle}>WELCOME</h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.leftside}>
            <div className={[styles.inputDiv, styles.one].join(' ')}>
              <div className={styles.i}>
                <FontAwesomeIcon className={styles.ic} icon={faUser} />
              </div>
              <div>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="ID"
                  onChange={(e) => setInputId(e.target.value)}
                ></input>
              </div>
            </div>
            <div className={[styles.inputDiv, styles.two].join(' ')}>
              <div className={styles.i}>
                <FontAwesomeIcon className={styles.ic} icon={faLock} />
              </div>
              <div>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setInputPwd(e.target.value)}
                ></input>
              </div>
            </div>
            <p className={styles.signupAnnounce}>
              아직 덕성 멋사 회원이 아니시라면?{' '}
              <Link to="/Signup" className={styles.signupLink}>
                회원가입하러가기
              </Link>
            </p>
          </div>
          <div className={styles.rightside}>
            <button className={styles.submit} onClick={() => LoginHandle()}>
              GO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
