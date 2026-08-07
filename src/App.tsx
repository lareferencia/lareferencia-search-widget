import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { TabsContainer } from "./components/tabs/TabsContainer";
import { PieChartPanel } from "./components/tabs/PieChartPanel";
import { useWidgetData } from "./hooks/useWidgetData";
import { FacetItem } from "./interfaces/api-response";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const { data } = useWidgetData();

  const pieData: FacetItem[] | undefined = data
    ? [data.formats, data.networks, data.languages][tabIndex]
    : undefined;

  return (
    <Box display="flex" gap={3} alignItems="stretch">
      <TabsContainer onTabChange={setTabIndex} />
      <PieChartPanel data={pieData} />
    </Box>
  );
}

export default App;
