import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route  index element={<Home />} />
          <Route  path="login" element={<Login />} />
          <Route  path="sign-up" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
