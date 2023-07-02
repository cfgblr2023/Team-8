import React, { useState } from 'react'
import { Link } from "react-router-dom";
 import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
    const [credentials, setcredentials] = useState({email: "", password:""});
  let history = useHistory();
 
  const Submit=async (e)=>{
    // alert('Login Successful')  
     e.preventDefault();
     //api call to login
      const response = await fetch("http://localhost:5000/api/mentees/login", {
          method: 'POST', // *GET, POST, PUT, DELETE, etc. 
          headers: {
            "Content-Type": "application/json"
             },
             body: JSON.stringify({email:credentials.email, password: credentials.password}),
        });
        // parses JSON response into native JavaScript objects
      const json = await response.json();
       console.log(json)
       if(response.status >= 200 && response.status < 300)  {
        //redirect to your notes page and save the auth token
        localStorage.setItem('token',json.token)
        history.push('/courses')
       }else{
        alert("invalid credentials")

       }
  }
  const change = (e)=>{
       setcredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <section className="vh-100 my-5 pt-5">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid" alt="Sample"/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form >
            <div className="form-outline mb-4">
              <input type="email" id="email" name="email"className="form-control form-control-lg"
                placeholder="Enter a valid email address" required/>
              <label className="form-label" htmlFor="email" >Email address</label>
            </div>
  
            
            <div className="form-outline mb-3">
              <input type="password" id="password" name="password" className="form-control form-control-lg"
                placeholder="Enter password" required/>
              <label className="form-label" htmlFor="password">Password</label>
            </div>
              <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" className="btn btn-primary btn-lg pl-[2.5rem] pr-[2.5 ]" >Login</button>
              </div>
            </form>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
              <Link to ="signup">Register</Link>  </p>
        </div>
      </div>
    </div>
    
   </section>
  )
}

export default Login
