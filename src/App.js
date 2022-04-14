import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <br />
      <footer>
        <a href="https://github.com/cecilmkl/react-weater-app">
          Open-source code
        </a>{" "}
        by Cecilie K.
      </footer>
    </div>
  );
}

export default App;
