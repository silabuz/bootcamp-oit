import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Blog from "./components/Blog";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            </Route>
          {/* <Route path="user/:userId" element={<User />} user={{}} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
