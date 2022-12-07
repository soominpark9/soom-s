import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="ProductList">
      {products.map((product) => {
        // products: products 배열의 원소
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
