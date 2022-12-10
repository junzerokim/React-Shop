import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let Box = styled.div`
  background: ${(props) => props.bg};
  padding: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  let findProduct = props.shoes.find((a) => {
    return a.id === Number(id);
  });

  return (
    <div className="container">
      <Box bg="black"></Box>
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
