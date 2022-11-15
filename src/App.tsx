import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Navbar2 from "../src/components/Navbar/Navbar2";
import Battle from "../src/components/Battle/Battle";
import Ockultism from "../src/components/Ockultism/Ockultism";

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <Navbar2></Navbar2>
          {/* <NavLink to="/"> Hem </NavLink>
          <NavLink to="/gallery"> galleri </NavLink> */}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/ockultism" element={<Ockultism />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
