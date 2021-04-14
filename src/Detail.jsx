import axios from "axios";
import React, {useState,useEffect} from "react";

const Detail=(props)=>{
   
   /* const[data,setData]=useState({});
    useEffect(()=>
    {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${props.id}`).then(res=>
        {
            console.log("data is",res.data);
            setData(res.data)
        }
        );
    }
    );*/
   const data=props.data;
    console.log(data);
    return(
        <>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Body</th>
     
    </tr>
  </thead>
  <tbody>
  
            <tr>
            <th scope="row">{data.id}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.body}</td>
           
          </tr>
     
   
  </tbody>
</table>
        </>
    )
}
export default Detail;