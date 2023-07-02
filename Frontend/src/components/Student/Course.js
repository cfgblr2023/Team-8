import React from "react";
import prof from '../../image/professional-development-3.jpg'
import soc from '../../image/750x450_395256-social-media.jpg'
import fin from '../../image/download.jpeg'
import soft from '../../image/cio-softskills_mobile.png'



const Course = () => {
  let Course = {
    backgroundColor: "black",
  };
  return (
    <div className="container">
      <div id="course" className="p-5 my-0" style={Course}>
        <h1 className="text-light">Courses</h1>
      </div>
      <div>
        <div class="card my-4" style={{ width: "8rem;" }}>
          <img src={prof} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Professional Development</h5>

            <a href="#" class="btn btn-primary">
              Start Course
            </a>
          </div>
        </div>
        <div class="card my-4" style={{ width: "8rem;" }}>
          <img src={soc} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Social Media</h5>

            <a href="#" class="btn btn-primary">
              Start Course
            </a>
          </div>
        </div>
        <div class="card my-4" style={{ width: "8rem;" }}>
          <img src={ fin}class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Finance</h5>

            <a href="#" class="btn btn-primary">
              Start Course
            </a>
          </div>
        </div>
        <div class="card my-4" style={{ width: "8rem;" }}>
          <img src={soft} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Soft Skills</h5>

            <a href="#" class="btn btn-primary">
              Start Course
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
