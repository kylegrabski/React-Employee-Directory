import React from "react";

function UserCards({ employees }) {

  return (
    <>
      {/* <p>NAME: {employees[0].name.first}</p> */}

      <div className="row pb-5 mb-4">
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div className="card shadow-sm border-0 rounded">
            <div className="card-body p-0">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-1_dewapk.jpg"
                alt=""
                className="w-100 card-img-top"
              />
              <div className="p-4">
                <h5 className="mb-0">Mark Rockwell</h5>
                <p className="small text-muted">CEO - Consultant</p>
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
      </div>
    </>
  );
}

export default UserCards;
