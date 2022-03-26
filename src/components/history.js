import React, { useEffect, useState } from "react";
import '../css/History.css';


export default function History() {

    const [position, setPosition] = useState(0);
    function onScroll() {
        setPosition(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
        window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
      <div className="outer">
        <div className="inner bg-yellow">
        <h1>{'What is "LIKELION"?'}</h1>
        <img className="what" alt="whatis" src="../img\whatis.png"/>
        <div className="text1">
        {'멋쟁이사자처럼은 온라인 기반의 강의와 오프라인 활동이 함께 이루어지는 코딩 교육 동아리입니다.'}</div>
        <div className="text1">{'프로그래밍을 강의식으로 가르치고 끝내는 단체가 아닌 머릿 속에 있는 아이디어가 세상에 나올 힘을 길러주는 곳입니다.'}</div>
        </div>
        <div className="inner bg-blue">2</div>
        <div className="inner bg-black"></div>
        <div className="inner bg-pink">
            <div className="hack">Hack Your Life!</div>
            <div className="with">with</div>
            <img className="logo" alt="DS_logo" src="../img/likelion_DS_logo.png" />
        </div>
      </div>
    );
  }
  
