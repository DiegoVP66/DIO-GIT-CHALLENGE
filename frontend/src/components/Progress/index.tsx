import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Courses } from "types/course";
import { ChartData } from "types/types";
import { baseURL } from "util/request";
import { options } from "./helpers";

const Progress = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios.get(`${baseURL}/courses/list`).then((response) => {
      const data = response.data as Courses[];
      const myLabels = data.map((x) => x.courseName);
      const mySeries = data.map((y) => y.percent);

      setChartData({
        labels: {
          categories: myLabels,
        },
        series: [
          {
            name: "",
            data: mySeries,
          },
        ],
      });
    });
  }, []);

  return (
    <div>
      <Chart
        options={{ ...options, xaxis: chartData.labels }}
        series={chartData.series}
        width="100%"
        height="125px"
        type="bar"
      />
    </div>
  );
};

export default Progress;
