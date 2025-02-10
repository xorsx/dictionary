import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary</header>
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <footer>
          Coded by Olivia Swann open-source on{" "}
          <a href="https://github.com/xorsx/dictionary">Github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
