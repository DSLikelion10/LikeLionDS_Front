import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import studystyle from '../css/Study.module.css';

const Study = () => {
  const [detail, setDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    const id = params.studyId;
    axios
      .get(`http://localhost:3001/study/studies/${id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((error) => console.log('Network Error : ', error));
  }, [params.studyId]);
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
        <div class={studystyle.item}></div>
      </div>
    </div>
  );
};

export default Study;
