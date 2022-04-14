import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
        <footer>
          <a href="https://github.com/cecilmkl/react-weater-app">
            Open-source code
          </a>{" "}
          by Cecilie K.
        </footer>
      </header>
    </div>
  );
}

export default App;
