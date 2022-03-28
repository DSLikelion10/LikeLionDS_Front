import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import studystyle from '../css/Study.module.css';
import { getCookie } from '../util/cookie';
//import ourimg from '../../../likelion_back/server/uploads/jQrg1HGtWvmRso1UiTaeIj8Yq.jpg';
// import { useNavigate } from 'react-router-dom';
import home from '../img/Home.svg';

const Study = () => {
  const [detail, setDetails] = useState([]);
  // const [file, setFile] = useState('');
  const [imgurl, setImgurl] = useState('');
  const params = useParams();
  // const navigate = useNavigate();

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = params.studyId;
    axios
      .get(`http://localhost:3001/study/studies/${id}`)
      .then((res) => {
        console.log(res.data.img);
        const hope = res.data.img.data;
        const img_url = [];
        for (let i = 8; i < hope.length; i++) {
          console.log(String.fromCharCode(hope[i]));
          img_url.push(String.fromCharCode(hope[i]));
        }
        console.log(img_url.join(''));
        setImgurl('http://localhost:3001/' + img_url.join(''));
        console.log(String.fromCharCode(res.data.img.data[0]));
        setDetails(res.data);
      })
      .catch((error) => console.log('Network Error : ', error));
  }, []);

  const deleteBT = () => {
    const id = params.studyId;

    const check = window.confirm('정말로 게시물을 삭제하시겠습니까?');

    if (check) {
      console.log('게시물 삭제를 요청하셨습니다.');
      axios
        .delete(`http://localhost:3001/study/${id}`, {
          headers: {
            accessToken: getCookie('mytoken'),
          },
        })
        .then((res) => {
          console.log('삭제 성공');
          navigate('/study_main');
        })
        .catch((error) => console.log('삭제 실패 : ', error));
    } else {
      alert('게시물 삭제를 취소하였습니다.');
    }
    //token 아무거나 줘도 삭제 되는데 accessToken쪽에서 제가 token비교를 해야하는건가요?
  };

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
          <img id="image" src={imgurl} alt="이미지" width="500px" />
          {console.log(imgurl)}
        </div>
      </div>
      {isVisible && (
        <div class={studystyle.studybutton}>
          <button type="button" class={studystyle.deleteBT} onClick={deleteBT}>
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
};

export default Study;
