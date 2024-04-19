import "./App.css";
import "./components/media.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Lowermain from "./components/lowermain";

function App() {
  return (
    <div className="App  ">
      <header className=" container min-vw-100  p-0 m-0 d-flex justify-content-between">
        <Nav />
        <Slider />
      </header>
      <main className="container p-0 m-0">
        <Lowermain />
      </main>
    </div>
  );
}

export default App;
