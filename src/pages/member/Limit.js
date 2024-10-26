import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/styles.css";

const Limit = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card">
        <div className="row">
          <div className="card-body">
            <div className="successcard">
              <img src="media/limit.webp" className="done" alt="Done" />
              <h5 className="card-title">
                <b>Over Visitation.</b>
              </h5>
              <p className="card-text">
                To ensure fair usage, members are limited to 2-3 visits per week
                <br></br>to allow everyone an opportunity to use the gym.
                <br></br>
                <br></br>
                In the mean time, you can log another user and come back next
                week!
              </p>

              <div className="reqbuttons">
                <button
                  onClick={() => navigate("/history")}
                  className="btn btn-dark left"
                >
                  View Visit History
                </button>
                <button
                  onClick={() => navigate("/fingerprint")}
                  className="btn btn-primary right"
                >
                  Log another user
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Limit;
