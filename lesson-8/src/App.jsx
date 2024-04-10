import "./App.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Lowermain from "./components/lowermain";

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex justify-content-between">
        <Nav />
        <Slider />
      </header>
      <main>
        <Lowermain />
      </main>
    </div>
  );
}

export default App;
