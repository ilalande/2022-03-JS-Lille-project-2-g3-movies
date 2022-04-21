import { Routes, Route } from "react-router-dom";
import ResultsCategory from "@components/ResultsCategory";
import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CarrousselNews from "./components/CarrousselNews";
import Suggestion from "./pages/Suggestion";
import SGlobal from "./style";

function App() {
  return (
    <SGlobal>
      <div className="rollover">
        <Header />
        <CarrousselNews />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/results/:category" element={<ResultsCategory />} />
        </Routes>
        <Footer />
      </div>
    </SGlobal>
  );
}
export default App;
