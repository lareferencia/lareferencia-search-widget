import { Box } from "@chakra-ui/react";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";

//interface for data coming as props
interface BarChartProps {
    data: { value: number; name: string }[];
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current);

        if (chartRef.current) {
            const option = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: data.map(item => item.name),
                },
                yAxis: {
                    
                },
                series: [
                    {
                        data: data.map(item => item.value),
                        type: 'bar',
                        name: 'count',
                    },
                ],
            };

            console.log(data.map(item => item.value));
            option && myChart.setOption(option);
        }
    }, [data]);

    return (
        <Box height="100%">
            <Box id="bar-chart" ref={chartRef} height="100%"></Box>
        </Box>
    );
};