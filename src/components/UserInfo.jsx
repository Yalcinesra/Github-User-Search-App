import React from "react";
import { Col, Card, Button, Row } from "react-bootstrap";

const UserInfo = ({veri}) => {
console.log(veri.login);
  return (
    <Row xs={2} md={3} lg={3} className="mt-4 justify-content-center align-items-center">
      <Col>
        <Card style={{width:"400px"}}>
          <Card.Img variant="top" src={veri.avatar_url} />
          <Card.Body>
            <Card.Text>{veri.login} </Card.Text>
            <Button
              href={`https://github.com/${veri.login}`}
              target="true"
              style={{ borderRadius: "50px" }}
              variant="primary"
            >
              VIEW PROFILE
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserInfo;
