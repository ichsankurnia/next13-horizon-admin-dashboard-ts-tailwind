'use client'

import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

type Props = {
  series: ApexAxisChartSeries | any
  options: ApexOptions
}

const PieChart = (props: Props) => {
  const { series, options } = props;

  return (
    <Chart
      options={options}
      type="pie"
      width="100%"
      height="100%"
      series={series}
    />
  );
};

export default PieChart;
