import axio from "axios";
import { useState, useEffect } from "react";

const signUpURL =
  "https://silabuz-api-project.herokuapp.com/authentication/sign-up/";

const loginURL =
  "https://silabuz-api-project.herokuapp.com/authentication/login/";

function App() {
  const { user, setUser } = useState({ username: "" });

  const handleLogin = (loginURL, username, password) => {
    axio
      .post(loginURL, { username: username, password: password })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", `Token ${token}`);
      });
  };

  const handleSingUp = (signUpURL) => {
    let body = {
      username: "test-11",
      email: "test-11@gmail.com",
      password: "123456",
    };
    axio
      .post(signUpURL, body)
      .then((response) => {
        const { username } = response.data;
        const { password } = body;

        handleLogin(loginURL, username, password);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="App">
      <button onClick={() => handleSingUp(signUpURL)}>Sign-Up</button>
    </div>
  );
}

export default App;
