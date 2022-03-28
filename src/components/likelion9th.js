import React, {useState} from "react";
import '../css/likelion9th.css';
import '../css/likelion10th.css';
import '../css/likelion8th.css';


export default function History() {

    const [mount1, setMount1] = useState(false);
    const [effect1, setEffect1] = useState('mount1');

    const [mount2, setMount2] = useState(false);
    const [effect2, setEffect2] = useState('mount2');

    const [mount3, setMount3] = useState(false);
    const [effect3, setEffect3] = useState('mount3');

    const onClickBtn1 = () => {
        
        if(mount1){
            setEffect1('unmount1');
            setTimeout(()=>{     
                setMount1(v=> !v);    
            }, 400) 
        }
        else{
            setMount3(false);
            setMount2(false);
            setEffect1('mount1');
            setMount1(v=> !v);
            
        }
        
    };

    const onClickBtn2 = () => {
        
        if(mount2){
            setEffect2('unmount2');
            setTimeout(()=>{     
                setMount2(v=> !v);    
            }, 400) 
        }
        else{
            setMount1(false);
            setMount3(false);
            setEffect2('mount2');
            setMount2(v=> !v);
        }
        
    };

    const onClickBtn3 = () => {
        
        if(mount3){
            setEffect3('unmount3');
            setTimeout(()=>{     
                setMount3(v=> !v);    
            }, 400) 
        }
        else{
            setMount1(false);
            setMount2(false);
            setEffect3('mount3');
            setMount3(v=> !v);
        }
        
    };

    return (

        <div className="container">
            <div className="container-wrap">

            <button type="button" onClick={onClickBtn1}>10기</button>
            <button type="button" onClick={onClickBtn2}>9기</button> 
            <button type="button" onClick={onClickBtn3}>8기</button>  

                {mount1 ? 
                <div className={`box-wrap ${effect1}`}>
                    <div className="ten">
                    <text className="title">10기 활동(예정)</text>
                        <ul>
                            <li>
                            <h4>2022. 03 덕성여자대학교 멋쟁이사자처럼 10기 </h4>
                            <p>멋쟁이사자처럼 10기 아기사자 모집 및 활동 시작</p>
                            </li>
                            <li>
                            <h4>2022. 04 아기사자 교육 </h4>
                            <p>기획/디자인, 프론트엔드, 백엔드 교육</p>
                            </li>
                            <li>
                            <h4>2022. 06 ~ 2022. 09 아이디어톤, 해커톤</h4>
                            <p>학습한 지식을 바탕으로 아이디어를 실현하는 시간 </p>
                            </li>
                        </ul>
                        </div>
                </div> : <> </> } 

                 

                    {mount2 ? 
                    <div className={`box-wrap ${effect2}`}>
                        <div className="nine">
                            <text className="title">9기 활동</text>
                            <ul>
                                <li>
                                <h4>2021. 03 덕성여자대학교 멋쟁이사자처럼 9기 </h4>
                                <p>멋쟁이사자처럼 9기 아기사자 활동 시작</p>
                                </li>
                                <li>
                                <h4>2021. 04 아이디어톤 </h4>
                                <p>걷고싶길, 우주닥터, 해요, UNIDO</p>
                                <span className="photo1"></span>
                                </li>
                                <li>
                                <h4>2021. 05 인비저블 특강</h4>
                                <p>7기 덕성 멋쟁이 사자처럼
                                    인비저블 이은정 대표님, 이민정 대표님 </p>
                                    <span className="photo2"></span>
                                </li>
                                <li>
                                <h4>2021. 07 중앙 멋사 아이디어톤 </h4>
                                <p>멋쟁이사자처럼 대학연합 </p>
                                </li>
                                <li>
                                <h4>2021. 08 중앙 멋사 해커톤</h4>
                                <p>MOMOMU, Herspital </p>
                                <span className="photo3"></span>
                                </li>
                                <li>
                                <h4>2021. 10 단풍톤 </h4>
                                <p>덕성여대, 동덕여대, 상명대, 한국외대 연합 해커톤
                                </p>
                                </li>
                            </ul>
                        </div>
                    </div> : <> </> } 
  

                        {mount3 ? 
                        <div className={`box-wrap ${effect3}`}>
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
                        </div> : <> </> } 
                    
            </div> 
        </div>
    );
  }
            