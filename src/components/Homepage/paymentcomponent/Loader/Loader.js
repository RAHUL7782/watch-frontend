import { ThreeDots } from "react-loader-spinner";

const Loader=()=>{

    return(
        <>

     
    <h1 style={{color:"green"}}> Your Payment is Being Processing </h1>    
        
    <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
   />
        
        </>
    );
}

export default Loader;