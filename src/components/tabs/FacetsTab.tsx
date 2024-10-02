import { Box, List, ListItem, TabPanel, Text } from "@chakra-ui/react";
import { PieChart } from "./charts/PieChart";
// import { BarChart } from "./charts/BarChart";
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


  
  //TODO: Ignore this fn, will be deleted when we implement localization for translations
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  return (
    <TabPanel p="0" display="flex">

    <Box bgColor="#7FC7BD" w="65%" p="6" h='auto' display='flex' alignItems='center'>
      <List 
        listStyleType='-'
        display='flex' 
        flexWrap='wrap' 
        gap='4'
        flexDirection='row'
        p={2}
      >
        {data && data?.facets?.format?.map((item, index) => (
          <ListItem 
            key={index} 
            flex='0 0 45%'
            maxW='50%'
            sx={{
              '::marker': {
                color: '#b4e2dc', 
              }
            }}
          >
            <Text as="span" fontSize="xl" fontWeight="semibold" color="white">
            {capitalizeFirstLetter(item.translated)} - {item.count.toLocaleString()}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>

      <Box bgColor="#b4e2dc" w="35%" h='250px'>
      <PieChart data={(data?.facets?.format?.map(item =>({value:item.count, name:item.translated})) || [])} />
      {/*<BarChart data={(data?.facets?.format?.map(item =>({value:item.count, name:item.translated})) || [])} />*/}
      </Box>

    </TabPanel>
  );
};
