import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Provider from "./components/Provider";
import FAQ from "./components/FAQ";
import CondtionsTreated from "./components/ConditionsTreated";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Provider />
        <CondtionsTreated />
        <FAQ />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
