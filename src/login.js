import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const staticUsername = "ADMIN";
  const staticPassword = "12345";

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === staticUsername && password === staticPassword) {
      navigate("/");
    } else {
      alert("INVALID USER");
    }
  };

  return (
    <div className="App">
      <h2>LOGIN-PAGE</h2>

      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="btn" className="btn btn-primary" onClick={handleLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
