import { useState } from 'react';
import './App.css';
import data from './data.js';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">Home</Link>
      <Link to="/detail">Detail</Link>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Row>
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} />;
                })}
              </Row>
            </>
          }
        />
        <Route path="/detail" element={<div>Detail Page</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} alt="" width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;
