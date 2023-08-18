import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Hero />
        <Projects />
      </div>
    </div>
  );
}

export default App;
