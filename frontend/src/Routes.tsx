import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesComponent = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default RoutesComponent;
