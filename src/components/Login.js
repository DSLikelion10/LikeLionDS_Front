// 수정 : Login.js 제작
import '../css/ResetCSS.css';
import styles from '../css/Login.module.css';
import { Link } from 'react-router-dom';
import { faUser, faLock } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome/index';
import React, { useState } from 'react';

const Login = () => {
  const [inputId, setInputId] = useState(''); //사용자가 입력한 id값
  const [inputPwd, setInputPwd] = useState(''); //사용자가 입력한 pwd값

  const LoginHandle = () => {
    // id값이 user이고 비밀번호가 1234인 경우만 로그인이 가능하도록 해둠
    if (inputId == "user" && inputPwd == "1234") {
      window.location.replace("/")
    }
    else {
      alert("로그인 실패!")
    }
  }
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
                <input className={styles.input} type="text" placeholder="ID"
                  onChange={(e) => setInputId(e.target.value)}>
                </input>
              </div>
            </div>
            <div className={[styles.inputDiv, styles.two].join(' ')}>
              <div className={styles.i}>
                <FontAwesomeIcon className={styles.ic} icon={faLock} />
              </div>
              <div>
                <input className={styles.input} type="password" placeholder="Password"
                  onChange={(e) => setInputPwd(e.target.value)}>
                </input>
              </div>
            </div>
            <p className={styles.signupAnnounce}>아직 덕성 멋사 회원이 아니시라면? <Link to="/Signup" className={styles.signupLink}>회원가입하러가기</Link></p>
          </div>
          <div className={styles.rightside}>
            <button className={styles.submit} onClick={() => LoginHandle()}>GO</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;