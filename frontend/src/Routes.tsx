import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Auth from "pages/Admin/Auth";
import CourseCRUDForm from "pages/Admin/CRUD/CRUDForm";
import CourseListCRUD from "pages/Admin/CRUD/CRUDList";
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
          <Route path="/admin/courses/create" element={<CourseCRUDForm />} />
          <Route path="/admin/courses/:courseId" element={<CourseCRUDForm />} />
          <Route path="/admin/courses" element={<CourseListCRUD />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default RoutesComponent;
