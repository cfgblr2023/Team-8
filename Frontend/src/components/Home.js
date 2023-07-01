import React from 'react'
import "./Home.css";
import Shiksha from '../image/Shiksha.webp'
import udaan from '../image/udaan.webp'
import Vridhi from '../image/Vridhi.webp'
import empowher from '../image/Empowher.webp'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
<div id="image" className="p-5 rounded-3 my-0">
  <div id="dtt" className="container-fluid py-5">
    <div className="geeks">
      <h1 className="canasu pt-5">CANASU FOUNDATION</h1>
      {/* <p className="text-white-50 mb-4 lead">
        Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
      </p> */}
      <Link to="/login" className="btn btn-dark btn-lg mt-5">
        Are You a Student?
      </Link>

      <Link to="/login" className="btn btn-lg mx-2 mt-5" style={{ backgroundColor: "aliceblue" }}>
        Are You an Instructor?
      </Link>
    </div>
  
  </div>
</div>

<div className="head">
    <div className='container align-items-center my-5 px-9'>
    <h2>Our Vision is to create a world in which all women determine <br />the course of their lifes & reach their full potential</h2>
    </div>
  
  <div className="popular">
    <div className="card mx-4" style={{ width: "18rem" }}>
      <img src={Shiksha}className="card-img-top" alt="..." />
      <div className="card-body">
        {/* <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p> */}
      </div>
    </div>
    <div className="card mx-4" style={{ width: "18rem" }}>
      <img src={udaan} className="card-img-top" alt="..." />
      <div className="card-body">
        {/* <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p> */}
      </div>
    </div>
    <div className="card mx-4" style={{ width: "18rem" }}>
      <img src={Vridhi} className="card-img-top" alt="..." />
      <div className="card-body">
        {/* <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p> */}
      </div>
      
    </div>
    <div className="card mx-4" style={{ width: "18rem" }}>
      <img src={empowher} className="card-img-top" alt="..." />
      <div className="card-body">
        {/* <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p> */}
      </div>
      
    </div>
  </div>
</div>
</>
  )
}

export default Home
