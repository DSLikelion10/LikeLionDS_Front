// 은 운영진 과제창 추가
import React from 'react';
import styles from '../css/ProjectList.css';
import {Card, Button, Badge} from 'react-bootstrap';
import { Link} from 'react-router-dom';

class ProjectList extends React.Component{
    state = {
        projectList : []
    }
    render() {
        return (
            <>
            <div className="chkheader">
            <p className="tasks">과제 제출</p>
        </div>
        <div className='header-part'>
            <div className='float-left'>
                <h2>과제 리스트</h2>
            </div>
            <div className='float-right'>
                <a className='btn btn-info'>
                <Link to='/projectcreate'> 
                + 과제 생성</Link>
                </a>
            </div>
            <div className='clearfix'></div>
        </div>
        <Card>
            <Card.Header as="h5">Test Project</Card.Header>
            <Card.Body>
                <Card.Text>
                1주차에는 개발환경을 구축 및 HTML 실습을 하였습니다. VScode를 이용하여 "Hello World"를 웹에 입력하고 캡쳐본을 올려주세요!
                </Card.Text>
                <Button variant="primary" >View</Button>
                <Button variant="success" >Edit</Button>
                <Button variant="danger" >Delete</Button>
                {/* 운영진일 경우 보기, 수정, 삭제 기능 / 아기사자일 경우 보기, 과제제출기능(백 작업 후 프론트 작업) */}
            </Card.Body>
        </Card>

        <Card className="card2">
            <Card.Header as="h5">Project 1</Card.Header>
            <Card.Body>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary" >View</Button>
                <Button variant="success" >Edit</Button>
                <Button variant="danger" >Delete</Button>
            </Card.Body>
        </Card>
        </>
         );
    }
}


    
export default ProjectList;