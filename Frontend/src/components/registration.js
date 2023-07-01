import React, { useState } from "react";
import img from "../image/a.jpg";

const Reg = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLanguages([...selectedLanguages, value]);
    } else {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== value));
    }
  };

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-lg-6 d-none d-lg-block">
                  <img
                    src={img}
                    alt="Sample photo"
                    className="img-fluid"
                    style={{ maxHeight: "100%", width: "100%" }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">
                      Student/Mentee registration form
                    </h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1m"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1m">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1n"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1n">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example97"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example97">
                        Email ID
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="tel"
                        id="form3ExamplePhone"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3ExamplePhone">
                        Phone Number
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example8"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example8">
                        Address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="date"
                        id="form3Example9"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example9">
                        DOB
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <select
                        className="form-select form-select-lg"
                        id="form3Example99">
                        <option value="">Select Course</option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                        <option value="course3">Course 3</option>
                      </select>
                      <label className="form-label" htmlFor="form3Example99">
                        Course
                      </label>
                    </div>
                    <div className="form-label">Select Languages:</div>
                    <div className="form-outline mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="English"
                          id="englishCheckbox"
                          onChange={handleLanguageChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="englishCheckbox">
                          English
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Hindi"
                          id="hindiCheckbox"
                          onChange={handleLanguageChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="hindiCheckbox">
                          Hindi
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Kannada"
                          id="kannadaCheckbox"
                          onChange={handleLanguageChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="kannadaCheckbox">
                          Kannada
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Tamil"
                          id="tamilCheckbox"
                          onChange={handleLanguageChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="tamilCheckbox">
                          Tamil
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Malyalam"
                          id="malayalamCheckbox"
                          onChange={handleLanguageChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="malayalamCheckbox">
                          Malayalam
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Telugu"
                          id="teluguCheckbox"
                          onChange={handleLanguageChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="teluguCheckbox">
                          Telugu
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Marathi"
                          id="marathiCheckbox"
                          onChange={handleLanguageChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="marathiCheckbox">
                          Marathi
                        </label>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3ExamplePassword"
                        className="form-control form-control-lg"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3ExamplePassword">
                        Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button type="button" className="btn btn-light btn-lg">
                        Reset all
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-lg ms-2">
                        Submit form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reg;
