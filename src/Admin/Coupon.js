import { useState } from "react";
import axios from "axios";
import "../Admin/styles/Coupon.css";
const Coupon = () => {


  const [input, setInput]= useState({});

  const handleInput=(e)=>
  {
    let name=e.target.name;
    let value=e.target.value;

    setInput(values=>({...values,[name]:value}));
  }


  const handleSubmit=()=>
  {
    axios.post("http://localhost:5050/couponSave" ,input).then(alert("Data Saved!!!"));
  }



  return (
    <>
    <div class="container">
      
    <div class="form-container">
      <h2 >Insert Details</h2>

        <div class="form-group">
          <label for="code">code</label>
          <input type="text" id="code" name="code" value={input.code}  onChange={handleInput}  />
        </div>

        <div class="form-group">
          <label for="discountPercentage">discountPercentage:</label>
          <input type="text" id="discountPercentage" name="discountPercentage" value={input.discountPercentage}  onChange={handleInput} />
        </div>

        <div class="form-group">
          <label for="validFrom">ValidFrom:</label>
          <input type="Date" id="validFrom" name="validFrom" value={input.validFrom}  onChange={handleInput}  />
        </div>

        <div class="form-group">
          <label for="validTill">ValidTill</label>
          <input type="Date" id="validTill" name="validTill" value={input.validTill}  onChange={handleInput}  />
        </div>
        

        <input type="submit" value="Submit" onClick={handleSubmit}/>

    </div>
  </div>
    </>
  );
};

export default Coupon;
