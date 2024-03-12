import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/About");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <h2>This is the homepage </h2>
      <button className="btn btn-danger" onClick={handleGoHome}>
        Go to about
      </button>
      <button className="btn btn-primary" onClick={handleLoginClick}>
        login
      </button>
    </div>
  );
};
export default Home;
