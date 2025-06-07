"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { useTheme } from "next-themes";

const UserDeviceReport = ({ height = 250 }) => {
  const { theme: mode } = useTheme();

  const series = [2200, 800, 1500];
  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["Desktop ", "Tablet", "Mobile"],
    dataLabels: {
      enabled: false,
    },

    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "24px",
              fontWeight: 500,
            },
            value: {
              show: true,
              label: "Total",
              fontSize: "18px",
              fontWeight: 600,
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "16px",
              fontWeight: 600,
            },
          },
        },
      },
    },
    legend: {
      position: "bottom",
      labels: {},

      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: -5,
      },
    },

    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      height={height}
      width={"100%"}
    />
  );
};

export default UserDeviceReport;
