import React from "react";
import { Card, Button, Navbar } from "react-bootstrap";
function Home(props) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Button variant="outline-primary">cart</Button>
      </Navbar>
      
      <Card style={{ width: "10rem", marginTop: "100px" }}>
        <Card.Body>
          <Card.Title>Product</Card.Title>
          <Card.Link href="#">
            <Button variant="info" onClick={()=>props.addTocartHandle({price :100})}>Add</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
