import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard=()=>
{
 
    const [UserData, setUserData]=useState({});


const loadData=()=>{
    let url="http://localhost:8000/user";
    axios.get(url).then((res)=>{
        console.log(res.data);
        setUserData(res.data)

    })
}

useEffect(()=>{
    loadData();
}, []);



    return(
        <>
        <hr size="4" color="red"/>
        <img src={UserData.img}  style={{borderRadius:"50%", width:"40px", height:"40px", border:"2px solig lightblue"}} />
        <h2> Welcome : {UserData.name}  </h2>
        <h2> email : {UserData.email} </h2>
        <hr size="4" color="red"/>


         <h1> User Dashboard</h1>
        
        </>
    );
}

export default Dashboard;