import React from "react";
import "./style.css";

function UserCards({ employees }) {
  console.log(employees[0]);
  return (
    <>
    <div className="container py-5">
      {/* <p>NAME: {employees[0].name.first}</p> */}
      <div className="row pb-5 mb-4">
      {employees.map((item) => {
        return (
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="card shadow-sm border-0 rounded mb-4">
                <div className="card-body p-0">
                  <img
                    src={item.picture.large}
                    alt={item.name.first}
                    className="w-100 card-img-top"
                  />
                  <div className="p-4">
                    <h5 className="mb-0">{item.name.first} {item.name.last}</h5>
                    <p className="small text-muted">Office - {item.phone}</p>
                    <p className="small text-muted">Mobile - {item.cell}</p>
                    <ul className="social mb-0 list-inline mt-3">
                      <li className="list-inline-item m-0">
                        <a href="#" className="social-link">
                          <i className="fa fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item m-0">
                        <a href="#" className="social-link">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item m-0">
                        <a href="#" className="social-link">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item m-0">
                        <a href="#" className="social-link">
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
