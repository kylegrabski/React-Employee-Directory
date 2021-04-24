import React from "react";
// import styles from './Navbar.module.css'

function Navbar(props) {
  return (
    <>
      <nav className="navbar sticky-top navbar-dark bg-dark shadow-lg p-3 mb-5">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            TechLink Inc.
          </a>
          <form className="d-flex input-group w-auto">
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="search"
              type="search"
              className="form-control"
              placeholder="Search By Name"
              aria-label="Search"
            />
           
           
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
