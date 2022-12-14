import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { addItem } from '../store';
import { useDispatch, useSelector } from 'react-redux';

function Detail(props) {
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');
  let [tap, setTap] = useState(0);
  let [fade2, setFade2] = useState('');
  let { id } = useParams();
  let findProduct = props.shoes.find((a) => {
    return a.id === Number(id);
  });
  let dispatch = useDispatch();
  let state = useSelector((state) => state);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) === true) {
      console.log('그러지마세요');
    }
  }, [num]);

  useEffect(() => {
    setTimeout(() => {
      setFade2('end');
    }, 1);
    return () => {
      setFade2('');
    };
  }, []);

  return (
    <div className={`container start ${fade2}`}>
      {alert === true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
      <button onClick={() => setCount(count + 1)}>button</button>
      <props.Row>
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes1.jpg`} alt="" width="100%" />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 }));
            }}
          >
            주문하기
          </button>
        </div>
      </props.Row>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTap(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTap(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTap(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TapContent tap={tap} shoes={props.shoes} />
    </div>
  );
}

function TapContent({ tap, shoes }) {
  let [fade, setFade] = useState('');
  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end');
    }, 1);
    return () => {
      clearTimeout(a);
      setFade('');
    };
  }, [tap]);
  return <div className={`start ${fade}`}>{[<div>{shoes[0].title}</div>, <div>button1</div>, <div>button2</div>][tap]}</div>;
}

export default Detail;
