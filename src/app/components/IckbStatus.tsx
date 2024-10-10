import React from "react";
import ReactApexChart from "react-apexcharts";

const IckbStatus: React.FC = () => {
  const ChartData = {
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }],
    options: {
      chart: {
        height: 240,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      toolbar:{
        show:false
      }
    }
  
  }
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-4">
      <h3 className="text-xl font-play font-bold mb-4">Liquidity</h3>
      <ReactApexChart options={ChartData} series={ChartData.series} type="area" height={350} />
    </div>
  );
};

export default IckbStatus;
