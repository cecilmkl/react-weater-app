import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Search defaultCity="London" />
        <footer>
          <a
            href="https://github.com/cecilmkl/react-weater-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Cecilie K.
        </footer>
      </div>
    </div>
  );
}

export default App;
