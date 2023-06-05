'use client'

import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

type Props = {
  series: ApexAxisChartSeries | any
  options: ApexOptions
}

const LineChart = (props: Props) => {
  const { series, options } = props;

  return (
    <Chart
      options={options}
      type="line"
      width="100%"
      height="100%"
      series={series}
    />
  );
};

export default LineChart;
