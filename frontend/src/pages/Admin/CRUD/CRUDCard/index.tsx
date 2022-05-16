import { AxiosRequestConfig } from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Courses } from "types/course";
import { makeBackendRequest } from "util/request";

import "./styles.css";

type Props = {
  course: Courses;
  onDelete: Function;
};

const CourseCRUDCard = ({ course, onDelete }: Props) => {
  const history = useNavigate();

  const handleDelete = (courseId: number) => {
    if (!window.confirm("are you sure you want to delete it?")) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: "DELETE",
      url: `/courses/${courseId}`,
      withCredentials: true,
    };

    makeBackendRequest(config)
      .then(() => {
        onDelete();
        history("/admin/courses/create");
      })
      .catch((error) => {
        console.log("Erro ao deletar " + error);
      });
  };
  return (
    <div className="base-card course-crud-card-container">
      <h1>Course: {course.courseName}</h1>
      <h3>Instructor: {course.instructorName}</h3>
      <p>Hours: {course.hours}</p>
      <p>Percentage: {course.percent}</p>
      <div className="btn-course-crud-container">
        <div className="course-delete-button">
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(course.id)}
          >
            DELETE
          </button>
        </div>
        <div>
          <Link to={`/admin/courses/${course.id}`}>
            <button className="btn btn-course-edit">EDIT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCRUDCard;
