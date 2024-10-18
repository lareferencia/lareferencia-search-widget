import { Box, TabPanel } from "@chakra-ui/react";
import { ListFormats } from "./ui/list/ListFormats";
import { PieLoading } from "./ui/PieLoading";
import { useEffect, useState } from "react";
import { getApi } from "../../api/api";
import { PieChart } from "./charts/PieChart";


type Props = {
  setPieChartData: any;
};
export const CountryTab = ({setPieChartData}: Props) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi("network_name_str");
      
      setData(response);
    };
    fetchData();

  }, []);

  return (
    <TabPanel>
      <Box bgColor="#7FC7BD" p="4">
        <ListFormats format={data?.facets.network_name_str} />
      </Box>
    </TabPanel>
  );
};
