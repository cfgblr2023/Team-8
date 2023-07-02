import React from "react";

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
          <img src="https://stock.adobe.com/search?k=%22professional+development%22" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Professional Development</h5>

            <a href="#" class="btn btn-primary">
              Start Course
            </a>
          </div>
        </div>
        <div class="card my-4" style={{ width: "8rem;" }}>
          <img src="https://www.searchenginejournal.com/why-social-media-is-important/285809/" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Social Media</h5>

            <a href="#" class="btn btn-primary">
              Start Course
            </a>
          </div>
        </div>
        <div class="card my-4" style={{ width: "8rem;" }}>
          <img src="https://www.freepik.com/vectors/finance" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Finance</h5>

            <a href="#" class="btn btn-primary">
              Start Course
            </a>
          </div>
        </div>
        <div class="card my-4" style={{ width: "8rem;" }}>
          <img src="" class="card-img-top" alt="..." />
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
