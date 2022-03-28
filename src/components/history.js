import React, { useState, useEffect } from 'react';
import '../css/History.css';


export default function History() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  

    return (
      <div className="outer">
        <div className="inner bg-yellow" >
        <h1>{'What is "LIKELION"?'}</h1>
          <img className="wht" src={require("../img/whatis.png")} />
        <div className="text1">
        {'멋쟁이사자처럼은 온라인 기반의 강의와 오프라인 활동이 함께 이루어지는 코딩 교육 동아리입니다.'}</div>
        <div className="text1">{'또한, 오프라인의 동료 학습을 통해 머릿 속에 있는 아이디어를 실현할 수 있도록 힘을 길러주는 곳입니다.'}</div>
        </div>
        <div className="inner bg-pink">
            <div className="hcontent">
                <br /><br /><br /><br /><br /><br /><br />
                <div className="hack">Hack Your Life!</div>
                <div className="with">with</div>
                <img className="logo" alt="DS_logo" src="../img/likelion_DS_logo.png" style={{ transform: `translateY(${offsetY * 0.8}px)` }}/>
            </div>
        </div>
      </div>
    );
  }
  
