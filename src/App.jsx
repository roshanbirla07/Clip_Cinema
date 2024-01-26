import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import Vediosection from "./Pages/Vediosection";
import GenreSelection from "./components/Genresection/GenreSelection";
import Footer from "./components/Footer";
function App() {
  return (
    <div className=" bg-gradient-to-r from-violet-200 to-pink-200   m-0 p-0 relative">
      <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 ">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/vediosection" element={<Vediosection />} />
        <Route path="/Genre" element={<GenreSelection  />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
