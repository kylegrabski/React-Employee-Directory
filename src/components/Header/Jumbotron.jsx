import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

function JumbotronComp() {
  return (
    <>
      <div className="customJumbotron">
        <div className="container">
          <Jumbotron>
            <h1>HERES THE JUMBTRON</h1>
            <p>We can talk about what the app does for the company here</p>
            <Button variant="dark">View All Employees</Button>
          </Jumbotron>
        </div>
      </div>
    </>
  );
}

export default JumbotronComp;
