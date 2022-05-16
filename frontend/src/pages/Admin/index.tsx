import { Route, Routes } from "react-router-dom";
import CourseCRUDForm from "./CRUD/CRUDForm";

const Admin = () => {
  return (
    <div className="admin-container">
      <Routes>
        <Route path="/admin/courses/create" element={<CourseCRUDForm />} />
        <Route path="/admin/courses/:courseId" element={<CourseCRUDForm />} />
      </Routes>
    </div>
  );
};

export default Admin;
