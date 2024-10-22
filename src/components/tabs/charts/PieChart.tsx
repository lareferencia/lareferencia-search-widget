import { Box } from "@chakra-ui/react";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";

//interface for data coming as props
interface PieChartProps {
  data: any;
}

export const PieChart : React.FC<PieChartProps> = ({ data }) => {
  
  
  
  const chartRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    // clean Format
    const formatClean = data.map(item => ({ value: item.count, name: item.translated }))

    if (chartRef.current) {
      const option = {
        tooltip: {
          show: false,
        },
        legend: {
          show: false,
        },
        color: ['#365F5F', '#4E8B89', '#76BFBE', '#8DCAC9' , '#A0D3D2' ], // Gama de colores personalizada

        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['55%', '90%'],

            avoidLabelOverlap: false,
            padAngle: 1,

            itemStyle: {
              borderRadius: 10
            },
            label: {
              show: true,
              position: 'center',
              color: 'black',
              fontSize: 13,
              fontWeight: 'bold',
              formatter: function(params: any) {
                const percentage = params.percent;
                return `${params.name}\n\n(${percentage}%)`;
              }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 13,
                fontWeight: 'bold',
                color: 'black',
                backgroundColor: '#7FC7BD',
                padding: 6,
                borderRadius: 8,
                formatter: function(params: any) {
                  const percentage = params.percent;
                  return `${params.name}\n\n(${percentage}%)`;
                }
              }
            },
            labelLine: {
              show: false
            },
            data: formatClean
          }
        ]
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
