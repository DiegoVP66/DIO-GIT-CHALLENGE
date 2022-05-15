import Pagination from "components/Pagination";
import { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { Courses } from "types/course";
import { SpringPage } from "types/spring";
import { makeBackendRequest } from "util/request";

import "./styles.css";

type ControlComponentsData = {
  activePage: number;
};
const Challenge = () => {
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
      url: `/courses`,

      params: {
        page: controlComponentsData.activePage,
        size: 3,
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
    <div className="challenge-table-container base-card">
      <h4 className="mt-4">
        TQI Bootcamp <span>125hrs</span>
      </h4>
      <table className="challenge-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Instructor</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {page?.content.map((item) => (
            <tr key={item.id}>
              <td>{item.courseName}</td>
              <td>{item.instructorName}</td>
              <td>{item.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <div className="row pagination-container">
          <Pagination
            pageCount={page ? page.totalPages : 0}
            range={3}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Challenge;
