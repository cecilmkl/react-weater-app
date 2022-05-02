import "./App.css";
import Search from "./Search";

function App() {
	console.log("Reloading App.js");
	return (
		<div className="App">
			<div className="container">
				<Search defaultCity="London" />

				<footer>
					This project was coded by{" "}
					<a
						href="https://xenodochial-morse-ecd400.netlify.app/about.html"
						target="_blank"
						rel="noreferrer"
					>
						Cecilie K.
					</a>{" "}
					and is{" "}
					<a
						href="https://github.com/cecilmkl/react-weater-app"
						target="_blank"
						rel="noreferrer"
					>
						open-sourced on GitHub
					</a>{" "}
					and{" "}
					<a
						href="https://lambent-toffee-90abf6.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						hosted on Netlify.
					</a>
				</footer>
			</div>
		</div>
	);
}

export default App;
