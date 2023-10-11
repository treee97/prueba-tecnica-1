import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Inicio, Peliculas, Series } from "./pages";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  // this is where the routes go. You dont write code here. just routing. PAGES is where the code goes.
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" index element={<Inicio />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
