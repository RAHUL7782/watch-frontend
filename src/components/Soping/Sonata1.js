
import React, { useState,useEffect } from "react";
import "../Soping/Sonata.css";
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../Homepage/ProductSlice/productSlice";
import axios from "axios";

const Sonata1 = () => {
  const [myData, setMydata] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const mycart = useSelector((state) => state.cartSlice.cart);
  const dispatch = useDispatch();

  console.log(mycart);

  const loadData = async () => {
    let url = "http://localhost:8000/productDisplay";
    axios.get(url).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

//   const myproductAdd = (myid, ProductName, ProductTitle, productPrice, productImage) => {
//     dispatch(addtocart({ id: myid, ProductName: ProductName, ProductTitle: ProductTitle, productPrice: productPrice, productImage: productImage, quantity: 1 }))
//   }

  
  const myproductbuy = (myid, ProductName, ProductTitle, productPrice, productImage) => {
    dispatch(addtocart({ id: myid, ProductName: ProductName, ProductTitle: ProductTitle, productPrice: productPrice, productImage: productImage, quantity: 1 }))
  }



  const toggleShowMore = () => {
    setShowMore(!showMore); 
  }

  return (
    <>
      <div className="main">
        <h1>Men Section</h1>
        <div className="product-grid">
          

          {myData.slice(0, 3).map((key) => (
            <div className="product-card" key={key._id}>
              <img src={key.productImage} alt="/" />
              <div className="product-details">
                <p>{key.ProductName}</p>
                <p>{key.ProductTitle}</p>
                <p>{key.productPrice}</p>

                {/* <button onClick={() => { myproductAdd(key._id, key.ProductName, key.ProductTitle, key.productPrice, key.productImage) }}>Add to Cart</button> */}

                <button onClick={() => { myproductbuy(key._id, key.ProductName, key.ProductTitle, key.productPrice, key.productImage) }}>Buy Now</button>
              </div>
            </div>
          ))}
          

          {showMore && myData.slice(3).map((key) => (
            <div className="product-card" key={key._id}>
              <img src={key.productImage} alt="/" />
              <div className="product-details">
                <p>{key.ProductName}</p>
                <p>{key.ProductTitle}</p>
                <p>{key.productPrice}</p>
                {/* <button onClick={() => { myproductAdd(key._id, key.ProductName, key.ProductTitle, key.productPrice, key.productImage) }}>Add to Cart</button> */}
                
                <button onClick={() => { myproductAdd(key._id, key.ProductName, key.ProductTitle, key.productPrice, key.productImage) }}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
       
        {myData.length > 3 && (
          <button onClick={toggleShowMore}>Show More</button>
        )}
      </div>
    </>
  );
}

export default Sonata1;
