import React from "react";
import canasu from '../canasu.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light pt-2">
      <div class="container-fluid">
       <Link to="/"> <img src={canasu}alt="navbar" style={{height: "46px"}} /></Link>
          
        
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/course">
                Courses
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Blog
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Programs
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/signup">
                    Shiksha
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/">
                    Vridhi
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                   Udaan
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                   Empowher
                  </Link>
                </li>
              </ul>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;