import { useState, useEffect } from "react";

const planetsUrl =
  "https://handlers.education.launchcode.org/static/planets.json";

function App() {
  const [planets, setPlanets] = useState([]);

  const getPlanets = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlanets((previousState) => data);
        console.log(planets);
      });
  };

  useEffect(() => {
    getPlanets(planetsUrl);
  }, []);

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {planets.map((planet) => {
          return (
            <div>
              <li key={planet.name}>
                <img
                  src={planet.image}
                  style={{ width: "50px", marginRight: "10px" }}
                />
                <strong>Planet Name: </strong> {planet.name}{" "}
                <strong>Cantidad de lunas: </strong>
                {planet.moons} <strong>Diametro: </strong>
                {planet.diameter}
              </li>
              <br />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
