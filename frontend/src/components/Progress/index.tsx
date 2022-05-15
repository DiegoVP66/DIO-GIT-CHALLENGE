import ReactApexChart from "react-apexcharts";
import { options } from "./helpers";

const initialData = [
  {
    x: "Computational thinking",
    y: 100,
    fillColor: "#00f7ff",
  },
  {
    x: "Introdution to Git and GitHub",
    y: 100,
    fillColor: "#00f7ff",
  },
  {
    x: "Working with Collections Java",
    y: 100,
    fillColor: "#00f7ff",
  },
];

const Progress = () => {
  return (
    <div>
      <ReactApexChart
        options={options}
        series={[{ data: initialData }]}
        type="bar"
        width="100%"
        height="115px"
      />
    </div>
  );
};

export default Progress;
