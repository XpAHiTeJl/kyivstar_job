import "./App.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex justify-content-between">
        <Nav />
        <Slider />
      </header>
    </div>
  );
}

export default App;
