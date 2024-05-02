import React from "react";
import "./ErrorPath.css";
import { useNavigate } from "react-router";

const ErrorPath = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="error-container">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Error Path</h5>
            <p class="card-text">
              Your url path is wrong. Please visit correct url path or back to
              home page.
            </p>
            <button onClick={() => navigate("/")} class="btn btn-primary">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPath;
