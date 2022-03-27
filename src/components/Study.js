import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import studystyle from '../css/Study.module.css';
import { useNavigate } from 'react-router-dom';

const Study = () => {
  const [detail, setDetails] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const id = params.studyId;
    axios
      .get(`http://localhost:3001/study/studies/${id}`)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((error) => console.log('Network Error : ', error));
  }, [params.studyId]);

  // const handleDelete = () => {
  //   const id = params.studyId;
  //   axios
  //     .get(`http://localhost:3001/study/${id}`)
  //     .then((res) => {
  //       navigate('/study_main');
  //       console.log('delete 성공을 축하드립니다 -이곳은 멋사 본부-');
  //     })
  //     .catch((error) => console.log('Network Error : ', error));
  // };

  return (
    <div>
      <h2 class={studystyle.detailtitle}>{detail.title}</h2>
      <div class={studystyle.detaildate}>
        작성일 : {detail.updatedAt ? detail.updatedAt.split('T')[0] : ''}
      </div>
      <div class={studystyle.container}>
        <div class={studystyle.head}>작성자</div>
        <div class={studystyle.item}>{detail.username}</div>
        <div class={studystyle.head}>날짜</div>
        <div class={studystyle.item}>{detail.studyDate}</div>
        <div class={studystyle.head}>내용</div>
        <div class={studystyle.item}>{detail.studyText}</div>
        <div class={studystyle.head}>사진</div>
        <div class={studystyle.item}>
          <img src={detail.img} alt="이미지" />
        </div>
      </div>
      <div class={studystyle.studybutton}>
        <button type="button" class={studystyle.deleteBT}>
          삭제하기
        </button>
        <button type="button" class={studystyle.modifyBT}>
          수정하기
        </button>
      </div>
    </div>
  );
};

export default Study;
