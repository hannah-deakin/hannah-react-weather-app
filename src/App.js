import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cartagena" />
        <footer>
          Code by{" "}
          <a
            href="https://github.com/hannah-deakin"
            target="_blank"
            rel="noreferrer"
          >
            Hannah Deakin
          </a>
          , open-source on{" "}
          <a
            href="https://github.com/hannah-deakin/hannah-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , and hosted on{" "}
          <a
            href="https://peppy-pithivier-6f681b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
