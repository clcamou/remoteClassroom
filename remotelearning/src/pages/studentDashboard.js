import React from 'react';
import Link from 'next/link';
import {
    Container,
    Row,
    Col,
    Card,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Navbar

} from 'reactstrap';
import Assignment_Hub from '../components/Assignment_Hub'
import Lessons_Hub from '../components/Assignment_Hub'
import Quizzes_All from '../components/Quizzes_All'


export default function studentDashboard(props) {

    return (
        <>
            <div>
                <Container>
                    <Row>
                        <h1> Welcome  </h1>
                    </Row>

                    <Row>
                        <Col sm="6">
                            <Card>
                                <CardBody>
                                    <CardTitle> Assignments </CardTitle>
                                    <CardText> <Assignment_Hub /> </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card>
                                <CardBody>
                                    <CardTitle> Lessons </CardTitle>
                                    <CardText> <Lessons_Hub/></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card>
                                <CardBody>
                                    <CardTitle> Quizzes </CardTitle>
                                    <CardText><Quizzes_All/></CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}