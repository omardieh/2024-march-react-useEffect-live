import { useEffect, useState } from "react";

function Product() {
  // with then :
  // const fetchProducts = () => {
  //   fetch("https://fakestoreapi.com/products/1")
  //   .then((response)=> response.json())
  //   .then((data) => console.log(data))
  // }

  // with async await :
  const [product, setProduct] = useState({});
  const [productID, setProductID] = useState(1);
  const url = `https://fakestoreapi.com/products/${productID}`;
  const fetchProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    let isMounted = true;
    console.log(isMounted);
    fetchProducts();
    return () => {
      isMounted = false;
      console.log(isMounted);
    };
  }, [url]);

  return (
    <div>
      <h2> {product.title} </h2>
      <button onClick={() => setProductID(productID - 1)}> previous </button>
      <button onClick={() => setProductID(productID + 1)}> next </button>
    </div>
  );
}

export default Product;
