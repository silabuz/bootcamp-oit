import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Characters from "./components/Character";




const apiUrl = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = (url) => {
    fetch(url)
      .then((response) => {
        console.log(response.data)
        return response.json();
      })
      .then(data => {
        setCharacters((previousState) => [...data.results])
      })
  };

  useEffect(() => {
    getCharacters(apiUrl);
  }, []);

  return (
    <div>
      <NavBar />
       <Characters characters={characters} />
      <Footer />
    </div>
  );
}

export default App;
