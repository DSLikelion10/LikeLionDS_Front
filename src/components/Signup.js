// 수정 : Signup.js 제작
import '../css/ResetCSS.css';
import styles from '../css/Signup.module.css';
import React, { useState } from 'react';
import axios from "axios";

const Signup = () => {
  const [inputId, setInputId] = useState(null);
  const [inputPwd, setInputPwd] = useState(null);
  const [inputPwd2, setInputPwd2] = useState(null);
  const [inputName, setInputName] = useState(null);
  const [inputMajor, setInputMajor] = useState(null);
  const [inputEmail, setInputEmail] = useState(null);
  const [inputPhone, setInputPhone] = useState(null);

  const send_param = {
    userID:inputId,
    userPW:inputPwd,
    userName:inputName,
    userMajor:inputMajor,
    userEmail:inputEmail,
    userPhone:inputPhone,
  }
  const Register = () =>{
    console.log(inputId,inputPwd,inputPwd2,inputName,inputMajor,inputEmail,inputPhone)
    axios.post('http://localhost:3001/auth',send_param).then((response)=>{
      console.log(response.data)
      if(response.data === "SUCCESS"){
        console.log('회원가입 성공');
        window.location.replace("/login");
      }else{
        alert('회원가입 실패');
      }
    });
  }
  return (
    <div className={styles.signup}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.SignupTitle}>Create Account</h1>
        </div>
        <div className={styles.mid}>
          <div className={styles.inputDiv}>
            <p>아이디</p><input type="text" 
            onChange={(e) => setInputId(e.target.value)}/>
          </div>
          <div className={styles.inputDiv}>
            <p>비밀번호</p><input type="password" 
            onChange={(e) => setInputPwd(e.target.value)}/>
          </div>
          <div className={styles.inputDiv}>
            <p>비밀번호 확인</p><input type="password" 
            onChange={(e) => setInputPwd2(e.target.value)}/>
          </div>
          <div className={styles.inputDiv}>
            <p>이름</p><input type="text" 
            onChange={(e) => setInputName(e.target.value)}/>
          </div>
          <div className={styles.inputDiv}>
            <p>전공</p><input type="text" 
            onChange={(e) => setInputMajor(e.target.value)}/>
          </div>
          <div className={styles.inputDiv}>
            <p>이메일</p><input type="text" 
            onChange={(e) => setInputEmail(e.target.value)}/>
          </div>
          <div className={styles.inputDiv}>
            <p>전화번호</p><input type="text" 
            onChange={(e) => setInputPhone(e.target.value)}/>
          </div>
        </div>
        <div className={styles.bottom}>
          <button className={styles.cancelBtn} onClick={() => { window.location.replace("/login") }}>CANCEL</button>
          <button className={styles.submitBtn} onClick={Register}>WELCOME!</button>
        </div>
      </div>
    </div>
  );
};
export default Signup;