import { Box } from "@chakra-ui/react";
import { PieChart } from "./charts/PieChart";
import { PieLoading } from "./ui/PieLoading";
import { FacetItem } from "../../interfaces/api-response";

interface PieChartPanelProps {
  data?: FacetItem[];
}

export const PieChartPanel = ({ data }: PieChartPanelProps) => {
  return (
    <Box
      layerStyle="glassmorphismHero"
      flex="0 0 220px"
      minH="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={2}
    >
      {data ? <PieChart data={data} /> : <PieLoading />}
    </Box>
  );
};
