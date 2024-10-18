import { Box, TabPanel} from "@chakra-ui/react";
import { ListFormats } from "./ui/list/ListFormats";
import { useEffect, useState } from "react";
import { getApi } from "../../api/api";

type Props = {
  setPieChartData: any;
}

export const FormatTab = ({setPieChartData}: Props) => {

  const [data, setData] = useState();

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await getApi("format");
      setPieChartData(response.facets.format);
      setData(response);
    }	
    fetchData();
  
   
  }, [])
  

  
  return (
    <TabPanel>

      <Box bgColor="#7FC7BD"  p="4" >
        <ListFormats format={data?.facets.format}  /> 
      </Box>

    </TabPanel>
  );
};
