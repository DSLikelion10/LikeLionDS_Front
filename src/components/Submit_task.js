import React from 'react';
//import {useState} from 'react';
import '../css/ResetCSS.css';
import styles from '../css/Submit_task.module.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link} from 'react-router-dom';

// 은 과제제출 페이지
// function App() {
    // const [movieContent, setMovieContent] = useState({
    //   title: '',
    //   content: ''
    // })
    
const Submit_task = () => {
  return (
    <div className={styles.chkbox}>
        <div className={styles.chkheader}>
            <p className={styles.tasks}>과제 제출</p>
        </div>
        <div className={styles.pagenavigation}>
            <ol className={styles.breadcrumb}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>[W1][HTML/CSS] 자기소개 페이지 제작</li>
            </ol>
        </div>
        <p className={styles.title}> [W1][HTML/CSS] 자기소개 페이지 제작 </p>
        <div className={styles.formwrapper}>
            <div className={styles.titlebox}>
                <label class="col-form-label col-xs-2" for="subject">제목</label>
                <input className={styles.titleinput} type='text' placeholder='제목' />
            </div>
            {/* <label class="control-label col-xs-2" for="subject">내용</label> */}
            <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={editor => {
                // You can store the "editor" and use when it is needed.ß
                console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
                console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
                console.log('Focus.', editor);
            }}
            />
            <button className={styles.submitbutton}>등록</button>
        </div>
    </div>
  );
};

export default Submit_task;
