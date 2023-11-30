import './App.css';
import Todoform from './components/Todoform';
import Todolist from './components/Todolist';
import { Routes,Route } from 'react-router-dom';
import { Navbar,Nav,Container } from 'react-bootstrap';
function App() {
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
    <Routes>
      <Route path="/" element={<Todoform/>}/>
      <Route path='/show' element={<Todolist/>}/>
    </Routes>
    </>
  );
}

export default App;
