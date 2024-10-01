import { Box, List, ListItem, TabPanel, Text } from "@chakra-ui/react";
import { PieChart } from "./charts/PieChart";
import { getApi } from "../../api/api";
import { useEffect } from "react";

export const FacetsTab = () => {


  const fetchData = async () => {
    try {
      const resp = await getApi();
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  


  return (
    <TabPanel p="0" display="flex">

      <Box bgColor="#7FC7BD" w="50%" p="6" h='250px' display='flex' alignItems='center'>
        <List display='flex' flexDir='column' gap='4'>
          <ListItem sx={{ listStyle: "none" }}>
            <Text as="span" fontSize="2xl" fontWeight="semibold" color="white">
              Articulos - 32,191,33
            </Text>
          </ListItem>
          <ListItem>
            <Text as="span" fontSize="2xl" fontWeight="semibold" color="white">
              Tesis - 2,191,33
            </Text>
          </ListItem>
          <ListItem>
            <Text as="span" fontSize="2xl" fontWeight="semibold" color="white">
              Reportes - 191,33
            </Text>
          </ListItem>
        </List>
      </Box>

      <Box bgColor="#b4e2dc" w="50%" h='250px' p={1}>
        <PieChart />
      </Box>

    </TabPanel>
  );
};
