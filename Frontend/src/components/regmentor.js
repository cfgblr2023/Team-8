import React, { useState } from "react";
import imgg from "../image/a.jpg";

const RegMentor = () => {
  //   const [selectedLanguages, setSelectedLanguages] = useState([]);

  //   const handleLanguageChange = (event) => {
  //     const { value, checked } = event.target;
  //     if (checked) {
  //       setSelectedLanguages([...selectedLanguages, value]);
  //     } else {
  //       setSelectedLanguages(selectedLanguages.filter((lang) => lang !== value));
  //     }
  //   };

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-lg-6 d-none d-lg-block">
                  <img
                    src={imgg}
                    alt="Sample photo"
                    className="img-fluid"
                    style={{ maxHeight: "100%", width: "100%" }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">
                      Mentor registration form
                    </h3>

                    <div className="form-outline mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          Name
                        </label>
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
                        type="date"
                        id="form3Example9"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example9">
                        DOB
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example9"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example99">
                        Education
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example9"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example99">
                        Designation
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
                          //onChange={handleLanguageChange}
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
                          //onChange={handleLanguageChange}
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
                          // onChange={handleLanguageChange}
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
                          // onChange={handleLanguageChange}
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
                          // onChange={handleLanguageChange}
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
                          //onChange={handleLanguageChange}
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
                          //onChange={handleLanguageChange}
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
                        text="text"
                        id="form3ExamplePassword"
                        className="form-control form-control-lg"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3ExamplePassword">
                        Available hours
                      </label>
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

export default RegMentor;