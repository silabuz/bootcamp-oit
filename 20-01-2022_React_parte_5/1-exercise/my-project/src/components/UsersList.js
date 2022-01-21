import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul class="list-group">
        {users.map((user) => {
          return (
            <li class="list-group-item list-group-item-light">
              <Link to={`user/${user.id}`} className="text-dark">
                {" "}
                {user.username}{" "}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
