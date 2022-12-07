import ProductList from '../components/ProductList';

const ProductPage = ({ products }) => {
  return (
    <main className="ProductPage">
      <div>여기는 상품 목록</div>
      <ProductList products={products} />
    </main>
  );
};

export default ProductPage;
//라우터에 관련된 내용은 아니고 이전 방식 복습(?)