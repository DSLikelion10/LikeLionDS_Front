// 수정 : Mypage.js 제작
import React, { useState, useRef } from 'react';
import '../css/ResetCSS.css';
import styles from '../css/Mypage.module.css';
import { ProgressBar } from 'react-bootstrap';
import { faPenSquare } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome/index';

const Mypage = () => {
  const [file, setFile] = useState();
  const [Image, setImage] = useState("img/likelion_DS_logo.png")
  const fileInput = useRef(null)

  const onChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    } else {
      setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
      return
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  return (
    <div className={styles.mypage} >
      <div className={styles.topHeader}>
        <div>내 정보</div>
        <div className={styles.editInfo}>
          <FontAwesomeIcon className={styles.editIc} icon={faPenSquare} />정보 수정
        </div>
      </div>
      <hr />
      <div className={styles.myInfo}>
        <div className={styles.myImg}>
          <img src={Image} onClick={() => { fileInput.current.click() }} />
          <input type="file" style={{ display: 'none' }} accept='image/*' name='profile_img' onChange={onChange} ref={fileInput} />
        </div>
        <div className={styles.infoForm}>
          <div><p>이름</p><p>김멋사</p></div>
          <div><p>전공</p><p>멋사학과</p></div>
          <div><p>github</p><p><span onClick={() => window.open('https://github.com/soosoo030', '_blank')}>https://github.com/soosoo030</span></p></div>
          <div><p>velog</p><p>너무 졸려요 대타 왜 한다 했지</p></div>
          <div><p>한 줄 소개</p><p>여러분은 총명하고 똑똑하게 살아야해요</p></div>
        </div>
      </div>
      <div>강의 진행률</div>
      <hr />
      <div className={styles.lectureProgress}>
        <div className={styles.lectureDiv}>
          <p>일단 만드는 HTML/CSS</p>
          <ProgressBar className={styles.progressbar} now={100} />
        </div>
        <div className={styles.lectureDiv}>
          <p>일단 만드는 Python</p>
          <ProgressBar className={styles.progressbar} now={60} />
        </div>
        <div className={styles.lectureDiv}>
          <p>[심화]같이 푸는 Python</p>
          <ProgressBar className={styles.progressbar} now={80} />
        </div>
        <div className={styles.lectureDiv}>
          <p>실검에 오르는 세렝게티 동물 테스트 만들기</p>
          <ProgressBar className={styles.progressbar} now={40} />
        </div>
        <div className={styles.lectureDiv}>
          <p>실검에 오르는 세렝게티 동물 테스트 만들기</p>
          <ProgressBar className={styles.progressbar} now={60} />
        </div>
        <div className={styles.lectureDiv}>
          <p>실검에 오르는 세렝게티 동물 테스트 만들기</p>
          <ProgressBar className={styles.progressbar} now={60} />
        </div>
        <div className={styles.lectureDiv}>
          <p>실검에 오르는 세렝게티 동물 테스트 만들기</p>
          <ProgressBar className={styles.progressbar} now={60} />
        </div>
      </div>
    </div>
  )
};

export default Mypage;
