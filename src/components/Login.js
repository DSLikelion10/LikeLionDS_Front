import '../css/ResetCSS.css';
import '../css/Login.css';
import { Link } from 'react-router-dom';
import { faUser, faLock } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome/index';

// 애니메이션 효과를 넣으려고 했으나, 어째선지 한번만 되고 새로고침하면 실행이 안 됨

const inputs = document.querySelectorAll('.input');
function focusFunc() {
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}
function blurFunc() {
  let parent = this.parentNode.parentNode;
  if (this.value === "") {
    parent.classList.remove('focus');
  }
}
inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
})
const Login = () => {

  return (
    <div className="login">
      <div className="wrapper">
        <div className="top">
          <h1 className="loginTitle">WELCOME</h1>
        </div>
        <div className="bottom">
          <div className="leftside">
            <div className="input-div one">
              <div className="i">
                <FontAwesomeIcon className="ic" icon={faUser} />
              </div>
              <div>
                <h5>ID</h5>
                <input class="input" type="text"></input>
              </div>
            </div>
            <div className="input-div two">
              <div className="i">
                <FontAwesomeIcon className="ic" icon={faLock} />
              </div>
              <div>
                <h5>Password</h5>
                <input class="input" type="password"></input>
              </div>
            </div>
            <p>아직 덕성 멋사 회원이 아니시라면? <Link to="/Signup">회원가입하러가기</Link></p>
          </div>
          <div className="rightside">
            <button className="submit">GO</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;