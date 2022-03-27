import React, {useState} from "react";
import '../css/likelion9th.css';


export default function History() {

    const [mount, setMount] = useState(false);
    const [effect, setEffect] = useState('mount1,mount2');

    const onClickBtn1 = () => {
        
        if(mount){
            setEffect('unmount1');
            setTimeout(()=>{     
                setMount(v=> !v);    
            }, 400) 
        }else{
            setEffect('mount1');
            setMount(v=> !v);
        }
        
    };

    const onClickBtn2 = () => {
        
        if(mount){
            setEffect('unmount2');
            setTimeout(()=>{     
                setMount(v=> !v);    
            }, 400) 
        }else{
            setEffect('mount2');
            setMount(v=> !v);
        }
        
    };

    const onClickBtn3 = () => {
        
        if(mount){
            setEffect('unmount3');
            setTimeout(()=>{     
                setMount(v=> !v);    
            }, 400) 
        }else{
            setEffect('mount3');
            setMount(v=> !v);
        }
        
    };

    return (

        <div className="container">
            <div className="container-wrap">

            <button type="button" onClick={onClickBtn1}>10기</button>  

                {mount ? 
                <div className={`box-wrap ${effect}`}>
                    <div className="ten">
                        <text className="title">10기 활동</text>
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

                <button type="button" onClick={onClickBtn2}>9기</button>  

                    {mount ? 
                    <div className={`box-wrap ${effect}`}>
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

                    <button type="button" onClick={onClickBtn3}>8기</button>  

                        {mount ? 
                        <div className={`box-wrap ${effect}`}>
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
            