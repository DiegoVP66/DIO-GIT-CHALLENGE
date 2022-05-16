import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import Auth from "pages/Admin/Auth";
import CourseCRUDForm from "pages/Admin/CRUD/CRUDForm";

import Home from "pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesComponent = () => (
  <BrowserRouter>
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/auth/" element={<Auth />} />
          <Route path="/admin/courses" element={<Admin />} />
          <Route path="/admin/courses/create" element={<CourseCRUDForm />} />
          <Route path="/admin/courses/:courseId" element={<CourseCRUDForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default RoutesComponent;
