import { Box, List, ListItem, TabPanel, Text } from "@chakra-ui/react";
import { PieChart } from "./charts/PieChart";
import { BarChart } from "./charts/BarChart";
import { getApi } from "../../api/api";
import { useState, useEffect } from "react";
import { ApiResponse } from "../../types/api";

export const FacetsTab = () => {

  // data from api will be stored here
  const [data, setData] = useState<ApiResponse | null>(null);

  const fetchData = async () => {
    try {
      const resp = await getApi();
      // set data to state
      setData(resp);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);




  return (
    <TabPanel p="0" display="flex">

      <Box bgColor="#7FC7BD" w="50%" p="6" h='auto' display='flex' alignItems='center'>
        <List display='flex' flexDir='column' gap='4'>
        {data && data?.facets?.format?.map((item, index) => (
            <ListItem key={index}>
              <Text as="span" fontSize="2xl" fontWeight="semibold" color="white">
                {item.translated} - {item.count.toLocaleString()}
              </Text>
            </ListItem>
          ))}

        </List>
      </Box>

      <Box bgColor="#b4e2dc" w="50%" h='250px' p={1}>
      <PieChart data={(data?.facets?.format?.map(item =>({value:item.count, name:item.translated})) || [])} />
      {/*<BarChart data={(data?.facets?.format?.map(item =>({value:item.count, name:item.translated})) || [])} />*/}
      </Box>

    </TabPanel>
  );
};
