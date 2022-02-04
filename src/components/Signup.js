import '../css/ResetCSS.css';
import '../css/Signup.css';
const Signup = () => {
  return (
    <div className="signup">

      <div className="wrapper">
        <div className="top">
          <h1 className="SignupTitle">Create Account</h1>
        </div>
        <div className="mid">
          <div className="inputDiv">
            <p>아이디</p><input type="text" />
          </div>
          <div className="inputDiv">
            <p>비밀번호</p><input type="password" />
          </div>
          <div className="inputDiv">
            <p>비밀번호 확인</p><input type="password" />
          </div>
          <div className="inputDiv">
            <p>이름</p><input type="text" />
          </div>
          <div className="inputDiv">
            <p>전공</p><input type="text" />
          </div>
          <div className="inputDiv">
            <p>이메일</p><input type="text" />
          </div>
          <div className="inputDiv">
            <p>전화번호</p><input type="text" />
          </div>
          <div className="inputDiv">
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
        <div className="bottom">
          <button className="cancelBtn">CANCEL</button>
          <button className="submitBtn">WELCOME!</button>
        </div>
      </div>
    </div>
  );
};
export default Signup;