export type SeriesData = {
  name: string;
  data: number[];
};

export type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};
