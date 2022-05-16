import { AxiosRequestConfig } from "axios";
import Pagination from "components/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Courses } from "types/course";
import { SpringPage } from "types/spring";
import { makeBackendRequest } from "util/request";
import CourseCRUDCard from "../CRUDCard";
import CourseImg from "assets/img/courseCRUD.svg";

import "./styles.css";

type ControlComponentsData = {
  activePage: number;
};

const CourseListCRUD = () => {
  const [page, setPage] = useState<SpringPage<Courses>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
    });
  };

  const getCourses = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/courses",
      params: {
        page: controlComponentsData.activePage,
        size: 1,
      },
    };

    makeBackendRequest(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  return (
    <div className="list-course-crud-flex">
      <div className="mt-4 list-course-crud-container base-card">
        <h1 className="course-title-crud">Course CRUD</h1>
        <Link to="/admin/courses/create">
          <button className="btn btn-primary ">ADD</button>
        </Link>
        <div className="row">
          <div className="col-sm-12">
            {page?.content.map((item) => (
              <div key={item.id}>
                <CourseCRUDCard course={item} onDelete={getCourses} />
              </div>
            ))}
          </div>
          <Pagination
            pageCount={page ? page.totalPages : 0}
            range={3}
            onChange={handlePageChange}
          />
        </div>
      </div>
      <div className="list-course-crud-img">
        <img src={CourseImg} alt="" />
      </div>
    </div>
  );
};

export default CourseListCRUD;
