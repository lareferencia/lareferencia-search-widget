import { Box } from "@chakra-ui/react";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import { FacetItem } from "../../../interfaces/api-response";

interface PieChartProps {
  data: FacetItem[];
}

export const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const { t } = useTranslation();
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const chartData = data.slice(0, 6).map((item) => ({
      value: item.count,
      name: t(item.value),
    }));

    chart.setOption({
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        formatter: (params: any) => {
          return `${params.name}<br/>${params.value.toLocaleString()} (${params.percent}%)`;
        },
      },
      legend: {
        show: false,
      },
      series: [
        {
          type: "pie",
          radius: ["42%", "72%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "outside",
            color: "rgba(255,255,255,0.65)",
            fontSize: 10,
            fontWeight: "600",
            formatter: (params: any) => `${params.percent}%`,
            overflow: "truncate",
          },
          labelLine: {
            show: true,
            length: 6,
            length2: 6,
            lineStyle: {
              color: "rgba(255,255,255,0.25)",
              width: 1,
            },
          },
          emphasis: {
            scale: true,
            scaleSize: 4,
            label: {
              show: true,
              fontSize: 11,
              fontWeight: "bold",
              color: "white",
            },
          },
          itemStyle: {
            borderRadius: 4,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 2,
          },
          color: [
            "#76BFBE",
            "#4E8B89",
            "#A0D3D2",
            "#2E6B6A",
            "#C4E8E7",
            "#1A4F4E",
          ],
          data: chartData,
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
    <Box height="100%" width="100%">
      <Box ref={chartRef} height="100%" width="100%" />
    </Box>
  );
};
