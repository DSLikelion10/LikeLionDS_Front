// 수정 : Signup.js 제작
import '../css/ResetCSS.css';
import styles from '../css/Signup.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';

const Signup = () => {
  const [inputId, setInputId] = useState(null);
  const [inputPwd, setInputPwd] = useState(null);
  const [inputPwd2, setInputPwd2] = useState(null);
  const [inputName, setInputName] = useState(null);
  const [inputMajor, setInputMajor] = useState(null);
  const [inputEmail, setInputEmail] = useState(null);
  const [inputPhone, setInputPhone] = useState(null);
  const regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;

  const send_param = {
    userID: inputId,
    userPW: inputPwd,
    userName: inputName,
    userMajor: inputMajor,
    userEmail: inputEmail,
    userPhone: inputPhone,
  };
  const Register = () => {
    console.log(
      inputId,
      inputPwd,
      inputPwd2,
      inputName,
      inputMajor,
      inputEmail,
      inputPhone,
    );
    axios.post('http://localhost:3001/auth', send_param).then((response) => {
      console.log(response.data);
      if (response.data === 'SUCCESS') {
        console.log('회원가입 성공');
        window.location.replace('/login');
      } else {
        alert('회원가입 실패');
      }
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //비밀번호 재확인
    if (inputPwd !== inputPwd2) {
      return alert('비밀번호 확인이 일치하지 않습니다.');
    }
    //email validation
    else if (!validator.isEmail(inputEmail)) {
      return alert('Enter Valid Email!');
    }
    //phone number validation
    else if (regExp.test(inputPhone) === false) {
      return alert('Enter Valid Phone number!');
    }
    //id-DB 중복 체크
    else {
      Register();
    }
  };

  return (
    <div className={styles.signup}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.SignupTitle}>Create Account</h1>
        </div>
        <div className={styles.mid}>
          <div className={styles.inputDiv}>
            <p>아이디</p>
            <input type="text" onChange={(e) => setInputId(e.target.value)} />
          </div>
          <div className={styles.inputDiv}>
            <p>비밀번호</p>
            <input
              type="password"
              onChange={(e) => setInputPwd(e.target.value)}
            />
          </div>
          <div className={styles.inputDiv}>
            <p>비밀번호 확인</p>
            <input
              type="password"
              onChange={(e) => setInputPwd2(e.target.value)}
            />
          </div>
          <div className={styles.inputDiv}>
            <p>이름</p>
            <input type="text" onChange={(e) => setInputName(e.target.value)} />
          </div>
          <div className={styles.inputDiv}>
            <p>전공</p>
            <input
              type="text"
              onChange={(e) => setInputMajor(e.target.value)}
            />
          </div>
          <div className={styles.inputDiv}>
            <p>이메일</p>
            <input
              type="text"
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputDiv}>
            <p>전화번호</p>
            <input
              type="text"
              onChange={(e) => setInputPhone(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <button
            className={styles.cancelBtn}
            onClick={() => {
              window.location.replace('/login');
            }}
          >
            CANCEL
          </button>
          <button className={styles.submitBtn} onClick={onSubmitHandler}>
            WELCOME!
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
