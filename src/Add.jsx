import React,{useState} from "react";


const Add=(props)=>{
    const{d}=props;
    const[data,setData]=useState({
        id:d.id,
        name:d.name,
        email:d.email,
        body:d.body
    });

    const Change=(e)=>
    {
        const{name,value}=e.target;
        setData({
            ...data,
            [name]: value,
        })
    }
    const Submit=()=>{
        props.AddData(data);
    }
    return(
        <>
                <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Id</label>
    <input type="text" class="form-control" name="id" value={data.id} onChange={Change}/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" name="name" value={data.name}onChange={Change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control" name="email"value={data.email} onChange={Change}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">body</label>
    <input type="text" class="form-control" name="body" value={data.body}onChange={Change}/>
  </div>
  
  <button type="button" class="btn btn-primary" onClick={Submit}>Submit</button>
</form>
        </>
    )
}
export default Add;