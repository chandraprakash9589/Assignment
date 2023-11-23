import "./App.css";
import Todoform from "./components/Todoform";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Todolist from "./components/Todolist";
import { useState } from "react";
function App() {
  const [Index, editIndex] = useState(null);
  const handleUpdate = (index) => {
    editIndex(index);
  };
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Todo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Add Todo</Nav.Link>
            <Nav.Link href="/show">View Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Routing */}

      <Routes>
        <Route
          path="/"
          element={<Todoform handleUpdate={handleUpdate} index={Index} />}
        />
        <Route
          path="/show"
          element={<Todolist handleUpdate={handleUpdate} />}
        />
      </Routes>
    </>
  );
}

export default App;
