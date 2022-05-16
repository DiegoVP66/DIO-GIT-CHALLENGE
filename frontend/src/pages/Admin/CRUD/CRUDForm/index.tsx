import { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Courses } from "types/course";
import { makeBackendRequest } from "util/request";

import "./styles.css";

type UrlParams = {
  courseId: string;
};

const CourseCRUDForm = () => {
  const { courseId } = useParams<UrlParams>();

  const isEditing = courseId;

  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Courses>();

  useEffect(() => {
    if (isEditing) {
      makeBackendRequest({ url: `/courses/${courseId}` }).then((response) => {
        const course = response.data as Courses;
        setValue("courseName", course.courseName);
        setValue("instructorName", course.instructorName);
        setValue("hours", course.hours);
        setValue("percent", course.percent);
      });
    }
  }, [isEditing, courseId, setValue]);

  const onSubmit = (formData: Courses) => {
    const data = {
      ...formData,
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? "PUT" : "POST",
      url: isEditing ? `/courses/${courseId}` : `/courses`,
      data: data,
      withCredentials: true,
    };

    makeBackendRequest(config)
      .then(() => {
        history("/admin/courses");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    history("/admin/courses");
  };

  return (
    <div className="course-crud">
      <div className="course-crud-container base-card">
        <h1>Course Form</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="course-form-crud-container"
        >
          <input
            {...register("courseName", {
              required: "Required field",
            })}
            type="text"
            className={`form-control base-input ${
              errors.courseName ? "is-invalid" : ""
            }`}
            placeholder="Course"
            name="courseName"
          />
          {errors.courseName && (
            <div className="invalid-feedback d-block">Required field</div>
          )}

          <input
            {...register("instructorName", {
              required: "Required field",
            })}
            type="text"
            className={`form-control base-input ${
              errors.instructorName ? "is-invalid" : ""
            }`}
            placeholder="Instructor name"
            name="instructorName"
          />
          {errors.instructorName && (
            <div className="invalid-feedback d-block">Required field</div>
          )}

          <input
            {...register("hours", {
              required: "Required field",
            })}
            type="text"
            className={`form-control base-input ${
              errors.hours ? "is-invalid" : ""
            }`}
            placeholder="Hours"
            name="hours"
          />
          {errors.hours && (
            <div className="invalid-feedback d-block">Required field</div>
          )}

          <input
            {...register("percent", {
              required: "Required field",
            })}
            type="text"
            className={`form-control base-input ${
              errors.percent ? "is-invalid" : ""
            }`}
            placeholder="%"
            name="percent"
          />
          {errors.percent && (
            <div className="invalid-feedback d-block">Required field</div>
          )}
          <button className="btn btn-primary text-white">SAVE</button>
          <button
            className="btn btn-primary text-white mt-4"
            onClick={handleCancel}
          >
            CANCEL
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseCRUDForm;
