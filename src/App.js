
import React, {useState,useEffect} from "react";
import axios from "axios";
import {BrowserRouter,Route,Link} from "react-router-dom";
import Details from "./Details";
import Detail from "./Detail";
import Nav from "./Nav";
import Home from "./Home";
import Add from "./Add";
const App=()=>{
  const[state,setState]=useState({data:[]});
 
  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/comments").then(res=>{
       setState({
         ...state,
         data: (res.data).slice(0,10)
       })
      })
      
  },[])
       
   const AddData=(data)=>{
     
      const d=state.data.filter(item=>item.id!=data.id);
      console.log(d);
      setState({
        ...state,
        data:[
          ...d,
          data
        ]
      })
   }   
        
      
     
    
 
  
 
  return(
   
    <>
     <BrowserRouter>
     <Nav/>
          <Route exact path="/" component={()=> <Home/>}/>
          <Route path="/details" component={()=> <Details data={state.data}/>}/>
          <Route path="/detail/:id" component={(props)=> <Detail data={state.data.find(d=>d.id==props.match.params.id)}/>}/>
          <Route path="/add" component={()=> <Add AddData={AddData} d={

           {
             id:"",
             name:"",
             email:"",
             body:"",
           }

          }/>}/>
          <Route path="/edit/:id" component={(props)=> <Add AddData={AddData} d={state.data.find(d1=>d1.id==props.match.params.id)}/>}/>
     </BrowserRouter>
    </>
  )
}
export default App;