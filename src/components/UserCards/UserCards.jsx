import React from "react";
import "./style.css";

function UserCards({ employees, searchEmployees }) {
  
  //map over employees state from App.js. Id is for unique key on each child.
  return (
    <>
      <div className="container py-5">
        <div className="row pb-5 mb-4 ">
          {employees.filter(searchEmployees).map((item) => {
            return (
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 " key={item.id}>
                <div className="card shadow-sm border-0 rounded mb-4 shadow-lg p-3 mb-5">
                  <div className="card-body p-0 ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-100 card-img-top"
                    />
                    <div className="p-2">
                      <h5 className="mb-0">
                        {item.name}
                      </h5>
                      <p className="small text-muted">Office - {item.phone}</p>
                      <p className="small text-muted">State - <strong>{item.state}</strong> </p>
                      <ul className="social mb-0 list-inline mt-3">
                        <li className="list-inline-item m-0">
                          <a href="/" className="social-link">
                            <i className="fa fa-envelope-square"></i>
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="/" className="social-link">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="/" className="social-link">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item m-0">
                          <a href="/" className="social-link">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserCards;
