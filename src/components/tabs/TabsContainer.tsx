import { Box, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { getApi } from "../../api/api";
import { useEffect } from "react";
import { GeneralData } from "./GeneralData";
import { FacetsTab } from "./FacetsTab";

export const TabsContainer = () => {
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
    <>
      {/* PANELS */}
      <Box display="flex">
        {/* General data */}
        <GeneralData />

        <Box bgColor="#7FC7BD" w="66.66%">
          <Tabs variant="colorful">
            <TabList>
              <Tab>Facets</Tab>
              <Tab>Otra tab</Tab>
            </TabList>

            <TabPanels>
              
              {/* Facet tab */}
              <FacetsTab />

            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};
