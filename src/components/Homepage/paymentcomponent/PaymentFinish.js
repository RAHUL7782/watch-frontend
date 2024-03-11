import { useEffect, useState } from "react";
import Loader from "../paymentcomponent/Loader/Loader";

const PaymentComplete=()=>{

  const [isLoading, setIsLoading]= useState(true);

  
  useEffect(()=>{

    setTimeout(()=>{

      setIsLoading(false);
    }, 3000);

   
  }, []);


  return(
        <>
<div style={{width:"400px", margin:"auto"}}>
<center>

    
      {isLoading?  <Loader/> : (
         <h1 style={{color:"green"}}> Thanks for Purchasing This Product <br/>
         We will Provide Your Product <br/> within 5 to 6 working Days 
        </h1>
      )  }
       
    
    
          



          </center>
  </div>
        </>
    );
}
export default PaymentComplete;