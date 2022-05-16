import { Route, Routes } from "react-router-dom";
import CourseCRUDForm from "./CRUDForm";
import CourseListCRUD from "./CRUDList";

const CourseADM = () => {
  return (
    <Routes>
      <Route path="/admin/courses" element={<CourseListCRUD />} />
      <Route path="/admin/courses/create" element={<CourseCRUDForm />} />
    </Routes>
  );
};

export default CourseADM;
