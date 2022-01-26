import axios from "axios";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const Signup = () => {
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
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
        "https://silabuz-api-project.herokuapp.com/authentication/sign-up/",
        authData
      )
      .then((response) => {
        if (response.status == 200) {
          console.log("success");
          window.location.replace("http://localhost:3000/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h1>Welcome to Signup</h1>
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
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            onChange={handleChange}
            value={authData.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
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
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
