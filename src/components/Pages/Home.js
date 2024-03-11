import React from "react";
import Crousel from "../Homepage/Crousel/Crousel";
import Shopfor from "../Homepage/ShopFor/Shopfor";
import Video from "../Homepage/Video/Video";


export const Home = () => {
  return (
    <div>
      <Crousel />
      <Shopfor />
      <Video />
      {/* <div>
      <h1> Welcome To Home Page</h1>
         <button><a href='http://localhost:8000/auth'>Login With Google</a></button> 
      </div> */}


    </div>
  );
};
