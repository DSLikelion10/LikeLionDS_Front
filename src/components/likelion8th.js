import React from "react";
import '../css/likelion8th.css';


export default function History() {

    return (
        <div className="eight">
        <text className="title">8기 활동</text>
        <ul>
            <li>
            <h4>2020. 04 덕성여자대학교 멋쟁이사자처럼 8기 </h4>
            <p>멋쟁이사자처럼 8기 아기사자 활동 시작</p>
            </li>
            <li>
            <h4>2020. 05 정규세션 및 아이디어톤 </h4>
            </li>
            <li>
            <h4>2020. 06 세션</h4>
            <p>Django의 CRUD 기능 </p>
            </li>
            <li>
            <h4>2020. 07 세션 </h4>
            <p>Git, 기획/디자인, Python세션 진행 </p>
            <span className="photo2"></span>
            </li>
            <li>
            <h4>2020. 08 "2020 여기톤"</h4>
            <p>덕성여대, 성신여대 여대연합 해커톤 진행</p>
            <span className="photo3"></span>
            </li>
            <li>
            <h4>2020. 여름방학 세션 </h4>
            <p> Django 로그인/회원가입, 댓글 기능 구현 세션 진행
            </p>
            </li>
        </ul>
        </div>
    );
  }
            