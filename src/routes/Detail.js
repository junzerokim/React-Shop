import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let { id } = useParams();
  let findProduct = props.shoes.find((a) => {
    return a.id === Number(id);
  });

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  return (
    <div className="container">
      {alert === true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
      <button onClick={() => setCount(count + 1)}>button</button>
      <props.Row>
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes1.jpg`} alt="" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </props.Row>
    </div>
  );
}

export default Detail;
