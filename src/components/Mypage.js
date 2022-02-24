// 수정 : Mypage.js 제작
import React, { useState, useRef } from 'react';
import '../css/ResetCSS.css';
import styles from '../css/Mypage.module.css';
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
        <div className={styles.title}>내 정보</div>
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
      <div className={styles.title}>🌱1일 1잔디를 실천합시다</div>
      <hr />
      <img className={styles.ghchart}src="https://ghchart.rshah.org/B70050/soosoo030"/>
    </div>
  )
};

export default Mypage;
