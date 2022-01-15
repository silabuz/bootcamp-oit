import logo from './logo.svg';
import './App.css';
import ListDisplayer from "./listDisplayer";


function App() {
  const animals = ["Perro", "Gato", "Conejo", "Raton", "Elefante", "Leon"]
  animals.sort()

  return (
    <div className="App">
      <ListDisplayer list={animals} />
    </div>
  );
}

export default App;
