import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://random-data-api.com/api/users/random_user?size=10";

function App() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = (url) => {
    axios.get(baseUrl).then((response) => {
      setCharacters((previousState) => [...response.data]);
    });
  };

  useEffect(() => {
    fetchCharacters(baseUrl);
  }, []);

  return (
    <div className="row cols-5">
      <button onClick={() => fetchCharacters(baseUrl)}>Refresh</button>
      {characters.map((character) => {
        return (
          <div
            className="card mb-3 m-5"
            style={{ maxWidth: "540px" }}
            key={character.id}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={character.avatar} class="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{character.username}</h5>
                  <p className="card-text">{character.uid}</p>
                  <p className="card-text">
                    <small className="text-muted">{character.email}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
