function Detail(props) {
  return (
    <div className="container">
      <props.Row>
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} alt="" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </props.Row>
    </div>
  );
}

export default Detail;
