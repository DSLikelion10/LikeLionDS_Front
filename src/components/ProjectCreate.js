// 은 운영진 과제창 추가
import React, { useState } from 'react';
import styles from '../css/ProjectCreate.css';
import { Card, Button, Badge, Spinner, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

class ProjectCreate extends React.Component {
  state = {
    isLoading: false,
  };
  // componentDidMount() {}

  render() {
    return (
      <>
        <div className="chkheader">
          <p className="tasks">과제 제출</p>
        </div>
        <div className="header-part">
          <div className="float-left">
            <h2>새로운 과제제출</h2>
          </div>
          <div className="float-right">
            <a className="btn btn-info">
              <Link to="/projectlist">과제 목록</Link>
            </a>
          </div>
          <div className="clearfix"></div>
        </div>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>과제 제목</Form.Label>
                <Form.Control type="text" placeholder="Enter Project Name" />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>과제 시작일: </Form.Label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={() => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>과제 종료일: </Form.Label>
                                <DatePicker
                                    selected={endDate}
                                    onChange={() => setEndDate(date)}
                                    selectsEnd
                                    endDate={endDate}
                                    minDate={startDate}
                                    />
                            </Form.Group> */}

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>과제 설명</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Project Description"
                  as="textarea"
                  rows="5"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                등록하기
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default ProjectCreate;
