// 수정 : Signup.js 제작
import '../css/ResetCSS.css';
import styles from '../css/Signup.module.css';
const Signup = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.SignupTitle}>Create Account</h1>
        </div>
        <div className={styles.mid}>
          <div className={styles.inputDiv}>
            <p>아이디</p><input type="text" />
          </div>
          <div className={styles.inputDiv}>
            <p>비밀번호</p><input type="password" />
          </div>
          <div className={styles.inputDiv}>
            <p>비밀번호 확인</p><input type="password" />
          </div>
          <div className={styles.inputDiv}>
            <p>이름</p><input type="text" />
          </div>
          <div className={styles.inputDiv}>
            <p>전공</p><input type="text" />
          </div>
          <div className={styles.inputDiv}>
            <p>이메일</p><input type="text" />
          </div>
          <div className={styles.inputDiv}>
            <p>전화번호</p><input type="text" />
          </div>
          <div className={styles.inputDiv}>
            <p>구분</p>
            <label>
              <input type="radio" name="role" value="leader" />
              운영진
            </label>
            <label>
              <input type="radio" name="role" value="member" checked="true" />
              멤버
            </label>
          </div>
        </div>
        <div className={styles.bottom}>
          <button className={styles.cancelBtn}>CANCEL</button>
          <button className={styles.submitBtn}>WELCOME!</button>
        </div>
      </div>
    </div>
  );
};
export default Signup;