// 수정 : Mypage.js 제작
import React, { useState, useRef, useCallback } from 'react';
import '../css/ResetCSS.css';
import styles from '../css/Mypage.module.css';
import { faPenSquare } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome/index';
import ReactCircleModal from 'react-circle-modal';

const Mypage = () => {
  // 프로필 이미지 등록
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

  // 정보 수정 모달창
  const [name, setName] = useState('김멋사');
  const [major, setMajor] = useState('멋사학과');
  const [email, setEmail] = useState('duksung@likelion.org');
  const [tel, setTel] = useState('010-0000-0000');
  const [gitAddress, setGitAddress] = useState('https://github.com/soosoo030');
  const [velogAddress, setVelogAddress] = useState('https://velog.io');
  const [comment, setComment] = useState('덕 성 멋 사 쵝 오');

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  });
  const onChangeTel = useCallback(e => {
    setTel(e.target.value);
  });
  const onChangeGitAddress = useCallback(e => {
    setGitAddress(e.target.value);
  });
  const onChangeVelogAddress = useCallback(e => {
    setVelogAddress(e.target.value);
  })
  const onChangeComment = useCallback(e => {
    setComment(e.target.value);
  })
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      setName(name);
      setMajor(major);
      setEmail(email);
      setTel(tel);
      setGitAddress(gitAddress);
      setVelogAddress(velogAddress);
      setComment(comment);
    },
    [name, major, email, tel, gitAddress, velogAddress, comment],
  )
  const gitId = gitAddress.replace('https://github.com/', '')

  return (
    <div className={styles.mypage} >
      <div className={styles.topHeader}>
        <div className={styles.title}>내 정보</div>
        {/* 정보 수정 모달창 */}
        <ReactCircleModal
          backgroundColor="#F2921D"
          toogleComponent={onClick => (
            <button onClick={onClick} className={styles.editInfo}>
              <FontAwesomeIcon className={styles.editIc} icon={faPenSquare} />정보 수정
            </button>
          )}
          offsetX={0}
          offsetY={0}
        >
          {(onClick) => (
            <div className={styles.infoModal} style={{ backgroundColor: '#fff', padding: '1em' }}>
              <form onSubmit={onSubmit}>
                <h1>개인 정보 수정</h1>
                <div>이름<input type="text" value={name} disabled /></div>
                <div>전공<input type="text" value={major} disabled /></div>
                <div>이메일 주소<input type="email" value={email} onChange={onChangeEmail} /></div>
                <div>전화번호<input type="tel" value={tel} onChange={onChangeTel} /></div>
                <div>github 주소<input type="url" value={gitAddress} onChange={onChangeGitAddress} /></div>
                <div>velog 주소<input type="url" value={velogAddress} onChange={onChangeVelogAddress} /></div>
                <div>한 줄 소개<input type="text" value={comment} onChange={onChangeComment} /></div>
                <button type="submit" onClick={onClick}>
                  수정 완료
                </button>
              </form>
            </div>
          )}
        </ReactCircleModal>

      </div>
      <hr />
      <div className={styles.myInfo}>
        <div className={styles.myImg}>
          <img src={Image} onClick={() => { fileInput.current.click() }} />
          <input type="file" style={{ display: 'none' }} accept='image/*' name='profile_img' onChange={onChange} ref={fileInput} />
        </div>
        <div className={styles.infoForm}>
          <div><p>이름</p><p>{name}</p></div>
          <div><p>전공</p><p>{major}</p></div>
          <div><p>github</p><p><span onClick={() => window.open(gitAddress, '_blank')}>{gitAddress}</span></p></div>
          <div><p>velog</p><p><span onClick={() => window.open(velogAddress, '_blank')}>{velogAddress}</span></p></div>
          <div><p>한 줄 소개</p><p>{comment}</p></div>
        </div>
      </div>
      <div className={styles.title}>🌱1일 1잔디를 실천합시다</div>
      <hr />
      <img className={styles.ghchart} src={"https://ghchart.rshah.org/B70050/".concat(gitId)} alt="⚠정보 수정에서 깃허브 주소를 입력해주세요" />
    </div>
  )
};

export default Mypage;
