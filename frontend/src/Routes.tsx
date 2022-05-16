import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import Auth from "pages/Admin/Auth";
import CourseCRUDForm from "pages/Admin/CRUD/CRUDForm";

import Home from "pages/Home";
import {} from "react-router-dom";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "util/auth";

const RoutesComponent = () => (
  <BrowserRouter>
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/auth/" element={<Auth />} />

          {isAuthenticated() ? (
            <Route path="/admin/courses" element={<Admin />} />
          ) : (
            <Route
              path="/admin/courses"
              element={<Navigate to="/admin/auth" />}
            />
          )}
          {isAuthenticated() ? (
            <Route path="/admin/courses/create" element={<CourseCRUDForm />} />
          ) : (
            <Route
              path="/admin/courses/create"
              element={<Navigate to="/admin/auth" />}
            />
          )}
          {isAuthenticated() ? (
            <Route
              path="/admin/courses/:courseId"
              element={<CourseCRUDForm />}
            />
          ) : (
            <Route
              path="/admin/courses/:courseId"
              element={<Navigate to="/admin/auth" />}
            />
          )}
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default RoutesComponent;
