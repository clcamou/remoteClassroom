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
  Button,

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
                  <Button>Sign Up</Button>
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
                  <Button>Sign Up</Button>
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
  )
}