import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid ">
    <a className="navbar-brand text-light" href="#">Hidden brand</a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-light" id="navbarTogglerDemo01">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active text-light" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active text-light" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active text-light" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;