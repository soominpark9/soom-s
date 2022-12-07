import { useParams, useNavigate } from "react-router-dom";

const ProductDetailPage = ({ products }) => {
  // app.js에서 보내주고 있는 props를 위에 ({products}) 이렇게 넣어줌
  console.log(products);
  const { productId } = useParams();
  //여기도 app.js에서  path="/product/:productId" 하고 있는 productId를 받아온다
  console.log(productId);

  const navigate= useNavigate();

  const [targetProduct] = products.filter((p) => p.id === Number(productId));

  //productId가 typeof productId를 해보면 string으로 나온다 그래서 콘솔로 p.id===productId를 하면
  //자꾸 빈배열이 나온이유 그래서 Number로 형변환을 시켜주거나 아니면 ==을 써준다
  console.log(targetProduct);
  //[targetProduct] filter id값이 일치하면 [ {} ] 나오거나 or  없다면 빈배열 []
  // targetProduct 여싸면 filter id값이 일치하면 {}  나오거나 or  없다면 undefined
  // targetProduct으로 쓰러면 인댁싱할떄 console.log(targetProduct[0])해줘야하고
  //아래의  <li>판매번호: {targetProduct[0].id}</li> 이렇게 해줘야함

  if (!targetProduct) {
    return <div className="ProductDetailPage">존재하지 않는 상품입니다.</div>;
  } //삼항연산자를 써도됨 {targetProduct ? (ul) : ( <div className="ProductDetailPage">존재하지 않는 상품입니다.</div>)}



  //if를 써주는 이유는 맨 처음에 쓰는 usestate의 products가 빈배열인데 -> 데이터 로드하기 전 값이 빈배열인데 그걸 그대로 지금 여기서 products를 받아오니까 당연히 빈배열에 대해서 필터링 해봤자 undefined가 뜰 수 밖에 없다
  //여기서 !targetProduct = ture 이기 때문에 그담부터 이제 원하는 값들이 나온다
  return (
    <main className="ProductDetailPage">
      <div>여기는 상품 디테일 페이지</div>

      <button onClick={() => navigate(-1) }>목록보기</button>
      <button onClick={() => navigate('/') }>홈으로 이동하기</button>
      <ul>
        <li>판매번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세설명: {targetProduct.body}</li>
      </ul>
    </main>
  );
};

export default ProductDetailPage;
