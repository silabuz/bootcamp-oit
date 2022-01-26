import axios from "axios";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [authData, setAuthData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setAuthData((previouseState) => ({
      ...previouseState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://silabuz-api-project.herokuapp.com/authentication/login/",
        authData
      )
      .then((response) => {
        if (response.status == 200) {
          window.location.replace("http://localhost:3000");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h1>Welcome to Login</h1>

      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
            onChange={handleChange}
            value={authData.username}
            aria-describedby="emailHelp"
            placeholder="Enter username"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            name="password"
            value={authData.password}
            onChange={handleChange}
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
