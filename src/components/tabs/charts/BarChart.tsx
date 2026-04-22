import { Box } from "@chakra-ui/react";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import { FacetItem } from "../../../interfaces/api-response";

interface BarChartProps {
  data: FacetItem[];
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const { t } = useTranslation();
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    // Sort data if needed, but assuming data is already sorted by count
    const chartData = data.slice(0, 6).map((item) => ({
      value: item.count,
      name: t(item.value),
    }));

    // Calculate total for percentages
    const total = chartData.reduce((acc, curr) => acc + curr.value, 0);

    chart.setOption({
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "none" },
        formatter: (params: any) => {
          const item = params[0];
          const percent = ((item.value / total) * 100).toFixed(1);
          return `${item.name}<br/>${item.value} (${percent}%)`;
        },
      },
      grid: {
        left: "3%",
        right: "3%",
        bottom: "5%",
        top: "20%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: chartData.map((d) => d.name),
        axisLabel: {
          color: "white",
          fontWeight: "bold",
          fontSize: 11,
          lineHeight: 14,
          interval: 0,
          width: 80, // max width for labels
          overflow: "truncate",
        },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      yAxis: {
        type: "value",
        show: false, // hide the y axis line and labels to keep it clean
      },
      color: ["#76BFBE"],
      series: [
        {
          name: "Distribution",
          type: "bar",
          data: chartData,
          barCategoryGap: "30%",
          itemStyle: {
            borderRadius: [4, 4, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#A0D3D2' },
              { offset: 1, color: '#4E8B89' }
            ])
          },
          label: {
            show: false,
          },
          emphasis: {
            disabled: true,
          }
        },
      ],
    });

    const ro = new ResizeObserver(() => chart.resize());
    ro.observe(chartRef.current);

    return () => {
      ro.disconnect();
      chart.dispose();
    };
  }, [data, t]);

  return (
    <Box height="100%">
      <Box ref={chartRef} height="100%" />
    </Box>
  );
};
