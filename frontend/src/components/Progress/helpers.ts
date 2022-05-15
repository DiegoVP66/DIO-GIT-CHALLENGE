export const options = {
  chart: {
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "40%",
      borderRadius: 6,
    },
    dataLabels: {
      show: true,
      textAnchor: "start",
    },
    colors: {
      backgroundBarColors: ["#40475D"],
    },
  },
  fill: {
    type: "gradient",
    color: "#00f7ff",
    gradient: {
      inverseColors: true,
      gradientToColors: ["#b549be"],
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#000"],
    },
    formatter: function (val: number, opt: any) {
      return (
        opt.w.globals.labels[opt.dataPointIndex] + ":  " + Number(val) + "%"
      );
    },
  },
};
