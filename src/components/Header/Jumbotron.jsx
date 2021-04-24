import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./customJumbotron.css";
function JumbotronComp({handleSortByName, getEmployees}) {
  return (
    <>
      <div className="customJumbotron">
        <div className="container">
          <Jumbotron>
            <h1>TechLink Inc. Employee Directory</h1>
            <p>
              Here is a sample directory from a fictitious company named
              TechLink Inc!
            </p>

            <p>Search for an employee using the search bar above</p>
          </Jumbotron>
            <Button variant="dark"
            onClick={getEmployees}
            >Load New Employees</Button>
         
            <Button variant="dark"
            onClick={handleSortByName}
            >Sort By Name</Button>
        </div>
      </div>
    </>
  );
}

export default JumbotronComp;
