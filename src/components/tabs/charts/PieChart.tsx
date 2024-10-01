import { Box } from "@chakra-ui/react";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";

export const PieChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    if (chartRef.current) {
      const option = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            selectedMode: "single",
            radius: ["0%", "85%"],
            label: {
              position: "inner",
              fontSize: 14,
              fontWeight: "bold",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Articulos" },
              { value: 735, name: "Tesis" },
              { value: 580, name: "Reportes" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    }
  }, []);

  return (
    <Box height='100%'>
      <Box id="pie-chart" ref={chartRef} height="100%"></Box>
    </Box>
  )
};
