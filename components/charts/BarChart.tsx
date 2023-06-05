'use client'

import { FC } from 'react';
import Chart from 'react-apexcharts';
import { type ApexOptions } from 'apexcharts';

type Props = {
  chartOptions?: ApexOptions
  chartData?: any
};

const BarChart: FC<Props> = ({ chartData, chartOptions }) => {
  return (
    <>
      <Chart
        options={chartOptions}
        series={chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    </>
  );
}

export default BarChart;