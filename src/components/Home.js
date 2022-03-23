import React from 'react';
import '../css/ResetCSS.css';
import '../css/Home.css';
import github from '../img/github.png';
import discord from '../img/discord.png';
import google_drive from '../img/google_drive.png';
import velog from '../img/Velog.png';
import insta from '../img/insta.png';

export default function Home() {
  return (
    <div>
      <h1 className="title">안녕하세요! 덕성 멋쟁이사자처럼 10기 입니다</h1>
      {/* 하드코딩 map 수정 예정!! 아마도 */}
      <div className="sns_container">
        <div className="sns_box">
          <span className="sns_aline">
            <img className="sns_icon" alt="sns_icon" src={github} />
            <p className="sns_name"> Github 바로가기 </p>
          </span>
          <span className="sns_aline">
            <img className="sns_icon" alt="sns_icon" src={discord} />
            <p className="sns_name"> discord 바로가기 </p>
          </span>
          <span className="sns_aline">
            <img className="sns_icon" alt="sns_icon" src={google_drive} />
            <p className="sns_name"> google_drive 바로가기 </p>
          </span>
          <span className="sns_aline">
            <img className="sns_icon" alt="sns_icon" src={velog} />
            <p className="sns_name"> velog 바로가기 </p>
          </span>
          <span className="sns_aline">
            <img className="sns_icon" alt="sns_icon" src={insta} />
            <p className="sns_name"> insta 바로가기 </p>
          </span>
        </div>
      </div>
    </div>
  );
}
