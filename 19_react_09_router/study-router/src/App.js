import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import MainPage from "./pages/MainPage";

import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Header from "./components/Header";
import "./styles/Common.scss";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
      //가져오는 배열 정보가 500개가 넘으니 앞에 기다리겠다는 await를 넣고 await는 함수가 필요하기 때문에 async를 위에 써두고 respose의 약자인 res를 변수로 넣어준다
      //axios는 가져올때 꼭 npm i axios를 깔아줘야함
    );
    setProducts(res.data.slice(0, 10));
  };

  // useEffect(() => {
  //   getProducts();
  // }, []);
  useEffect(() => {
    getProducts();
  }, []); //마운트 될때 찍히게 하려면 []배열 넣어줘야함

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          {/* products 내가 지은props의 이름 ={props} 위에 정의해준 state를 넣음 */}
          <Route
            path="/product/:productId"
            element={<ProductDetailPage products={products} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
