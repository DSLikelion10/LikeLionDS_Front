// 은 운영진 과제창 추가
import React from 'react';
import styles from '../css/ProjectView.css';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProjectView extends React.Component {
  state = {
    projectList: {},
    taskList: [],
    isLoading: false,
  };

  componentDidMount() {
    this.getProjectLists();
  }

  getProjectLists = () => {
    this.setState({ isLoading: true });
  };

  render() {
    return (
      <>
        <div className="chkheader">
          <p className="tasks">과제 제출</p>
        </div>
        <div className="header-part">
          <div className="float-left">
            <h2>Test Project</h2>
          </div>
          <div className="float-right">
            <a className="btn btn-info">
              <Link to="/projectcreate">+ 제출하기</Link>
            </a>
          </div>
          <div className="clearfix"></div>
        </div>
        <Card>
          <Card.Header as="h5">1주차 과제</Card.Header>
          <Card.Body>
            <Card.Text>
              깃허브 주소을 제출해주세요. example :
              https://github.com/DSLikelion10/LikeLionDS_Front
            </Card.Text>
            <Button variant="primary">View</Button>
            <Button variant="success">Edit</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default ProjectView;
