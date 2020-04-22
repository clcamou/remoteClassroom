import { useUser, fetcher } from '../lib/hooks';
import Link from 'next/link';
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button

} from 'reactstrap';



export default function HomePage(props) {

  return (
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
                  <Link href="../students/signupStudent">
                    <button type="button" className="btn-primary"> Sign Up</button>
                  </Link>
                  <CardText>
                    or <Link href="../students/studentlogin">
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
                  <Link href="../teachers/signupTeacher">
                  <button type="button" className="btn-primary"> Sign Up</button>
                  </Link>
                  <CardText>
                   or <Link href="../teachers/teacherlogin">
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
  )
}