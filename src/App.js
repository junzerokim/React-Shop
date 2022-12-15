import { useEffect, useState } from 'react';
import './App.css';
import data from './data.js';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';
import Cart from './routes/Cart';
import axios from 'axios';

function App() {
  useEffect(() => {
    if (localStorage === true) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);
  let [shoes, setShoes] = useState(data);
  let [clickCount, setClickCount] = useState(0);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            &#60;--
          </button>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('detail');
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('cart');
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <Row>
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i} key={i} />;
                  })}
                </Row>
              </div>
              <button
                onClick={() => {
                  setClickCount(clickCount + 1);
                  axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
                    let copy = [...shoes, ...result.data];
                    setShoes(copy);
                  });
                }}
              >
                More
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail Row={Row} shoes={shoes} />} />;
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

function Card(props) {
  let navigate = useNavigate();
  return (
    <Col
      sm
      onClick={() => {
        navigate(`detail/${props.i}`);
      }}
    >
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} alt="" width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;
