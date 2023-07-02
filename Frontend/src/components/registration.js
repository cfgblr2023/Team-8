import React, { useState } from "react";
import img from "../image/a.jpg";
import { useHistory,useRef } from "react-router-dom/cjs/react-router-dom.min";

const Reg = () => {
  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   setCheckboxValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: checked,
  //   }));
  // };
  
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    language: "",
    dob: "",
    educational_status: " ",
    
    residence_address: " ",
    program_name: " ",
    support_area: "",
  });
  let history = useHistory();
  console.log(credentials);
  const handleSubmit = async (e) => {
    // alert('Login Successful')
    e.preventDefault();
    //api call to login
    const { name, password, email, phone, school_address } = credentials;
    const response = await fetch("http://127.0.0.1:5000/api/v1/mentees", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        phone: credentials.phone,
        language: credentials.language,
        dob: "2001-03-03",
        educational_status: credentials.educational_status,
        school_address: "hello"
,        residence_address: credentials.residence_address,
        program_name: "Course 1",
        support_area: "creative arts",
        availability: "2023-01-23"
// name: "credentialsname",
// email: "credentialsemail",
// password: "credentialspassword",
// phone: "1234567890",
// language: "credentialslanguage",
// dob: '1990-11-30',
// educational_status: "credentials.educational_status",
// school_address: "hello"
// ,        residence_address: "credentials.residence_addres",
// program_name: "credentials.program_name",
// support_area: "credentials.support_area",
// availability: "2023-01-23"
      }),
    });
    // parses JSON response into native JavaScript objects
    if(response.status >= 200 && response.status < 300) {
    const json = await response.json();
    console.log(json);
      //redirect to your notes page and save the auth token
      localStorage.setItem("token", json.token);
      history.push("/course");
    } else {
      //ivalid credentials
      alert("invalid credentials");
    }
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // const handleLanguageChange = (event) => {
  //   const { value, checked } = event.target;
  //   if (checked) {
  //     setSelectedLanguages([...selectedLanguages, value]);
  //   } else {
  //     setSelectedLanguages(selectedLanguages.filter((lang) => lang !== value));
  //   }
  // };
  // const handleSubmit = () => {
  //   const payload = {
  //     checkbox1: checkboxValues.checkbox1 || false,
  //     checkbox2: checkboxValues.checkbox2 || false,
  //     // Include other fields in your payload
  //   };
  
    // Use the payload for further processing, API calls, etc.
  // };
  
 
 

  const handleFormReset = () => {
    setcredentials({
      name: '',
      email: '',
      phone: '',
      residence_address: '',
      dob: '',
      language: '',
      educational_status: '',
      password: '',
    });
  };
  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-lg-6 d-none d-lg-block pt-5 pl-2">
                  <img
                    src={img}
                    alt="Sample photo"
                    className="img-fluid"
                    style={{ maxHeight: '100%', width: '100%' }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <form onSubmit={handleSubmit}  onReset={handleFormReset} >
                      <h3 className="mb-5 text-uppercase">Student/Mentee registration form</h3>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              name="name"
                              id="firstName"
                              type="text"
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              value={credentials.name}
                            />
                            <label className="form-label form-control-lg" htmlFor="form3Example1m">
                              Full Name
                            </label>
                          </div>
                        </div>
                        {/* <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              name="LastName"
                              type="text"
                              id="form3Example1n"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="form3Example1n">
                              Last name
                            </label>
                          </div>
                        </div> */}
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="email"
                          type="text"
                          id="Email"
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          value={credentials.email}
                        />
                        <label className="form-label" htmlFor="form3Example97">
                          Email ID
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="phone"
                          type="tel"
                          id="PhoneNumber"
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          value={credentials.phone}
                        />
                        <label className="form-label" htmlFor="form3ExamplePhone">
                          Phone Number
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="residence_address"
                          type="text"
                          id="Address"
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          value={credentials.residence_address}
                        />
                        <label className="form-label" htmlFor="form3Example8">
                          Address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="dob"
                          type="date"
                          id="date"
                          className="form-control form-control-lg"
                          onChange={handleChange}
                          value={credentials.dob}
                        />
                        <label className="form-label" htmlFor="form3Example9">
                          DOB
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <select
                          className="form-select form-select-lg"
                          id="form3Example99"
                          onChange={handleChange}
                          value={credentials.course}
                          name="course"
                        >
                          <option value="">Select Course</option>
                          <option value="course1">Course 1</option>
                          <option value="course2">Course 2</option>
                          <option value="course3">Course 3</option>
                        </select>
                        <label className="form-label" htmlFor="form3Example99">
                          Course
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="password"
                          name="language"
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          value={credentials.language}
                        />
                        <label className="form-label" htmlFor="form3ExamplePassword">
                          Language Preferred
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="password"
                          name="educational_status"
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          value={credentials.educational_status}
                        />
                        <label className="form-label" htmlFor="form3ExamplePassword">
                          Education Qualification
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          onChange={handleChange}
                          className="form-control form-control-lg"
                          value={credentials.password}
                        />
                        <label className="form-label" htmlFor="form3ExamplePassword">
                          Password
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="reset" className="btn btn-light btn-lg" onClick={handleFormReset}>
                          Reset all
                        </button>
                        <button type="submit" className="btn btn-warning btn-lg ms-2">
                          Submit form
                        </button>
                      </div>
                    </form>
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
