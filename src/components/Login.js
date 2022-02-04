// 수정 : Login.js 제작
import '../css/ResetCSS.css';
import styles from '../css/Login.module.css';
import { Link } from 'react-router-dom';
import { faUser, faLock } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome/index';

const Login = () => {

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
                <input className={styles.input} type="text" placeholder="ID"></input>
              </div>
            </div>
            <div className={[styles.inputDiv, styles.two].join(' ')}>
              <div className={styles.i}>
                <FontAwesomeIcon className={styles.ic} icon={faLock} />
              </div>
              <div>
                <input className={styles.input} type="password" placeholder="Password"></input>
              </div>
            </div>
            <p>아직 덕성 멋사 회원이 아니시라면? <Link to="/Signup" className={styles.signupLink}>회원가입하러가기</Link></p>
          </div>
          <div className={styles.rightside}>
            <button className={styles.submit}>GO</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;