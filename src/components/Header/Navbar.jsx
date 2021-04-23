import React from "react";
// import styles from './Navbar.module.css'

function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search By Name"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              data-mdb-ripple-color="dark"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
// testing
export default Navbar;
