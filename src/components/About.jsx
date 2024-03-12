import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleGoAbout = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>this is the about page</h1>
      <button className="btn btn-info" onClick={handleGoAbout}>
        Go to Home
      </button>
    </div>
  );
};

export default About;
