import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/hannah-deakin/hannah-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced code
          </a>
          {""} by Hannah Deakin
        </footer>
      </div>
    </div>
  );
}
