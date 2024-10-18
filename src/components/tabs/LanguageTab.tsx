import { Box, TabPanel } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { getApi } from "../../api/api";
import { ListFormats } from "./ui/list/ListFormats";
import { PieChart } from "./charts/PieChart";
import { PieLoading } from "./ui/PieLoading";

type Props = {
    setPieChartData: any;
}
export const LanguageTab = ({setPieChartData}: Props) => {
    const [data, setData] = useState();

    useEffect(() => {
      const fetchData = async () => {
        const response = await getApi("language");
        setPieChartData(response.facets.language);
        setData(response);
      };
      fetchData();
    }, []);
  
    return (
      <TabPanel>
        <Box bgColor="#7FC7BD" p="4">
          <ListFormats format={data?.facets.language.slice(0,6)} />
        </Box>
  
        
      </TabPanel>
  )
}
