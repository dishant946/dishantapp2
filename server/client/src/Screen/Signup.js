
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup(){
    const navigate=useNavigate();
    
    const [details,setDetails]=useState({
        name:"",
        email:"",
        password:"",
        location:""
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const resopnse=await fetch('http://localhost:5000/api/CreateUser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:details.name,
                email:details.email,
                password:details.password,
                location:details.location
            })
        })
        const json=await resopnse.json();
        console.log(json);
        if(!json.sucess){
            alert('enter valid details');
        }
        else{
            alert("You are Registered successfully!!!!!!");
            navigate('/login');
        }
    }
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
            setDetails({
                ...details,
                [name]:value
            })
    }
    return(
        <>
        <div className="container">
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" value={details.name}  onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={details.email} onChange={handleChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={details.password} onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputaddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputaddress" name="location" value={details.location} onChange={handleChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>Already User</Link>
</form>
</div>
        </>
    )
}
export default Signup;