import React from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";

const Nav=()=>{

    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/details" class="nav-link" href="#">Details</Link>
        </li>
        <li class="nav-item">
          <Link to="/add" class="nav-link" href="#">Add</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Nav;