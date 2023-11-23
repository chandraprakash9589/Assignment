import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function LoadingScreen() {
  return (
    <>
    <Container>
      <Row className="justify-content-md-center mt-5">
      <Spinner animation="border"  size='lg' variant="secondary" />
      </Row>
    </Container>
    </>
  );
}

export default LoadingScreen;
