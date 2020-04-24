import { useFetchUser } from '../../lib/user';
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
} from 'reactstrap';
import Layout from '../components/Layout'


export default function HomePage(props) {
  const { user, loading } = useFetchUser();

  return (
    <div>
    <Layout user={user} loading={loading}>
      {loading && !user && (
    <>
      <div>
        <Container>
          <Row>
            <h1> Remote Learning Made Easy </h1>
          </Row>

          <Row>
            <Col sm="6">
              <Card>
                <CardBody>
                  <CardTitle>
                    Students
                </CardTitle>
                  <Link href="/signup">
                    <button type="button" className="btn-primary"> Sign Up</button>
                  </Link>
                  <CardText>
                    or <Link href="/login">
                      <a>Login</a>
                    </Link>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <Card>
                <CardBody>
                  <CardTitle>
                    Teachers
                </CardTitle>
                  <Link href="/signup">
                  <button type="button" className="btn-primary"> Sign Up</button>
                  </Link>
                  <CardText>
                   or <Link href="/login">
                      <a>Login</a>
                    </Link>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
      )}
  </Layout>
  </div>
  )
}