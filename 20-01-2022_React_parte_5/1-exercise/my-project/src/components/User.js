import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    username: "",
    company: { name: "" },
    phone: "",
    website: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div
      className="card"
      style={{ width: "18rem", marginLeft: "40rem", marginTop: "5rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{user.username}</h5>
        <p className="card-text">username: {user.email}</p>
        <p className="card-text">company: {user.company.name}</p>
        <p className="card-text">phone: {user.phone}</p>
        <p className="card-text">website: {user.website}</p>
        <Link to="/">Go Back to Users List</Link>
      </div>
    </div>
  );
};

export default User;
