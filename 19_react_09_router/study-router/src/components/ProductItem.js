import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { product } = props;
  //   console.log("ProductItem >>>");
  //   console.log(product);

  return (
    <Link className="ProductItem" to={"/Product/" + product.id}>
      <ul>
        <li>상품명: {product.name}</li>
        <li>상세설명: {product.body.slice(0, 80)}...</li>
      </ul>
    </Link>
  );
};
export default ProductItem;
