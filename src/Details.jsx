import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
const Details=(props)=>{
    
   const{data}=props;
    return(
        <>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
     
    </tr>
  </thead>
  <tbody>
    {data.map(d=>
            <tr>
            <th scope="row">{d.id}</th>
            <td>{d.name}</td>
            <td>
                <Link to={`/detail/${d.id}`}>view</Link>&nbsp;&nbsp;
                <Link to={`/edit/${d.id}`}>edit</Link>
            </td>
           
          </tr>
        )}
   
  </tbody>
</table>
        </>
    )
}
export default Details;