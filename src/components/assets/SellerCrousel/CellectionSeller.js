import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../components/assets/SellerCrousel/Cellection.css";
import { Seller } from "../../../Data/Data";

function SampleNextArrow(p) {
  const { className, style, onClick } = p;
  return (
    <divcd
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.308)",
        padding: "30px",
        backgroundColor:"rgba(0, 0, 0, 0.308)",
        marginRight:"50px",
        borderRadius:"30px"
        
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(p) {
  const { className, style, onClick } = p;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "rgba(0, 0, 0, 0.308)",
        padding: "30px",
        zIndex: "2",
        backgroundColor: "rgba(0, 0, 0, 0.308)",
        marginLeft:"50px",
        borderRadius:"30px"
     
      }}
      onClick={onClick}
    />
  );
}

const Slide = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, 
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="but" />,
    prevArrow: <SamplePrevArrow className="but" />,
    autoplaySpeed: 1000,
    autoplay: true,
    pauseOnHover: true,
    onmouseover: true
  };

  return (
    <Slider {...settings}>
    {Seller.map((key, index) => (
      <div key={index} className="container">
        <img src={key.img} alt="brands" />
        <div >
          <p className="da">{key.para}</p>
          <br/>
          <p className="price">{key.price}</p> 
        </div>
      </div>
    ))}
  </Slider>
  );
};

export default Slide;
