import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer.js';
import Navbar from '../Components/Navbar.js'
import Card from '../Components/Card.js'
import Carousel from '../Components/Carousel.js';

function Home() {
  const [foodCat,setFoodCat]=useState([]);
  const [foodItem,setFoodItem]=useState([]);
  const [search,setSearch]=useState("")
  const loadData=async()=>{
    let response=await fetch('http://localhost:5000/api/foodData',{
      method:"POST",
    headers:{
      'Content-Type':"application/json"
    }
    });
    response=await response.json();
   // console.log(response[0],response[1]);
   setFoodCat(response[1]);
   setFoodItem(response[0]);
  }

  useEffect(()=>{
    loadData();
  },[])

  return (
    <>
    <Navbar/>
    <div>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{"objectFit":"contain !important"}}>

<div className="carousel-inner" id="carousel">
  <div className="carousel-caption" style={{zIndex:"10"}}>
    <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/* s<button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
    </div>
  </div>
  <div className="carousel-item active">
    <img src="https://source.unsplash.com/random/300×300?burger" className="d-block w-100" style={{"filter":"brightness(70%)","maxHeight":"560px"}} alt="..." />
    <div className="carousel-caption d-none d-md-block">
      {/* <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p> */}
    </div>
  </div>
  <div className="carousel-item">
    <img src="https://source.unsplash.com/random/300×300?cake" className="d-block w-100" style={{"filter":"brightness(70%)","maxHeight":"560px"}} alt="..." />
    <div className="carousel-caption d-none d-md-block">
      {/* <h5>Second slide label</h5>
      <p>Some representative placeholder content for the second slide.</p> */}
    </div>
  </div>
  <div className="carousel-item">
    <img src="https://source.unsplash.com/random/300×300?drinks" className="d-block w-100 " style={{"filter":"brightness(70%)","maxHeight":"560px"}} alt="..." />
    <div className="carousel-caption d-none d-md-block">
      {/* <h5>Third slide label</h5>
      <p>Some representative placeholder content for the third slide.</p> */}
    </div>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
    </div>
    <div className='container'>
    {
      foodCat !==[]
      ?foodCat.map((data)=>{
        return (<div className='row mb-3'>
        <div key={data._id} className='fs-3 m-3'>{data.CategoryName}
        </div>
        <hr/>
        {
          foodItem !== []? foodItem.filter((item)=>(item.CategoryName == data.CategoryName)&&( item.name.toLowerCase().includes(search.toLowerCase()))) .map(filterItems=>{
            return(
              <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                
                <Card foodItem={filterItems}
                options={filterItems.options[0]}
                ></Card>
                
              </div>
            )
          }):<div>"No such data found"</div>
        }
        </div>
        )
      }):""
    } 
   
   

    </div>
    <Footer/>
    </>
  );
}

export default Home;
