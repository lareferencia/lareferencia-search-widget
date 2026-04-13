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

    const formatClean = data.map((item) => ({ value: item.count, name: item.value }));

    chart.setOption({
      backgroundColor: 'transparent',
      tooltip: { show: false },
      legend: { show: false },
      color: ['#365F5F', '#4E8B89', '#76BFBE', '#8DCAC9', '#A0D3D2'],
      series: [
        {
          name: 'Distribution',
          type: 'pie',
          radius: ['55%', '90%'],
          avoidLabelOverlap: false,
          padAngle: 1,
          itemStyle: { borderRadius: 10 },
          label: {
            show: true,
            position: 'center',
            color: 'white',
            fontSize: 12,
            fontWeight: 'bold',
            formatter: (params: { name: string; percent: number }) =>
              `${t(params.name)}\n\n(${params.percent}%)`,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 12,
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'rgba(71,143,141,0.7)',
              padding: 6,
              borderRadius: 8,
              formatter: (params: { name: string; percent: number }) =>
                `${t(params.name)}\n\n(${params.percent}%)`,
            },
          },
          labelLine: { show: false },
          data: formatClean,
        },
      ],
    });

    const ro = new ResizeObserver(() => chart.resize());
    ro.observe(chartRef.current);

    return () => {
      ro.disconnect();
      chart.dispose();
    };
  }, [data]);

  return (
    <Box height="100%">
      <Box ref={chartRef} height="100%" />
    </Box>
  );
};
