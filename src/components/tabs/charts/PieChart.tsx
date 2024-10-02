import { Box } from "@chakra-ui/react";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";

//interface for data coming as props
interface PieChartProps {
  data: { value: number; name: string }[];
}

export const PieChart : React.FC<PieChartProps> = ({ data }) => {
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
            radius: ["0%", "90%"],
            label: {
              position: "inner",
              fontSize: 14,
              fontWeight: "bold",
            },
            labelLine: {
              show: false,
            },
            data: data,

            itemStyle: {
              color: "#68B9B7",
              shadowBlur: 5,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },

            animationType: "scale",
            animationEasing: "elasticOut",
          },
        ],
      };

      option && myChart.setOption(option);
    }
  }, [data]);

  return (
    <Box height="100%">
      <Box id="pie-chart" ref={chartRef} height="100%"></Box>
    </Box>
  );
};
