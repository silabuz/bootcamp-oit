import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import User from "./components/User";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<UsersList />} />
          <Route path="user/:userId" element={<User />} user={{}} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
