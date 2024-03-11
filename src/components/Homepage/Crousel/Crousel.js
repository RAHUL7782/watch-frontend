import React, { useState, useEffect } from 'react';
import "../Crousel/Crousel.css"; 

const showSlides = (slideIndex, setSlideIndex) => {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  setSlideIndex((prevIndex) => {
    let newIndex = prevIndex + 1;
    if (newIndex > slides.length) {
      newIndex = 1;
    }
    return newIndex;
  });

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" Active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " Active";
}

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides(slideIndex, setSlideIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 7</div>
          <img src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw67c5b493/images/homepage/desktop/Poze-Pink-D.jpg" style={{width: "100%"}} alt="Nature" />
          {/* <div className="text">Caption Text</div> */}
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 7</div>
          <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwbc9b6bc9/images/homepage/All_Banners/Raga_Offer_D.jpg" style={{width: "100%"}} alt="Snow" />
        
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 7</div>
          <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw1225d3f2/images/homepage/All_Banners/VDaySale2060_D_310124.jpg" style={{width: "100%"}} alt="Mountains" />
        
        </div> 


        <div className="mySlides fade">
          <div className="numbertext">4 / 7</div>
          <img src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dwbe5b06cb/images/homepage/FT_Vday20to60_D_310124.jpg" style={{width: "100%"}} alt="Mountains" />
        
        </div> 

        <div className="mySlides fade">
          <div className="numbertext">5 / 7</div>
          <img src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw9d25f281/images/homepage/desktop/Poze-Green-D.jpg" style={{width: "100%"}} alt="Mountains" />
        
        </div>

        <div className="mySlides fade">
          <div className="numbertext">6 / 7</div>
          <img src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw9a40b6ca/images/homepage/desktop/NewArrivals-D.jpg" style={{width: "100%"}} alt="Mountains" />
        
        </div>

        <div className="mySlides fade">
          <div className="numbertext">7 / 7</div>
          <img src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw8b64a755/images/homepage/desktop/Hum-Na-Rukenge-D.jpg" style={{width: "100%"}} alt="Mountains" />
        
        </div>


      </div>
      <br />

      <div style={{textAlign: "center"}}>
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
      </div>
    </div>
  );
}

export default Slideshow;
