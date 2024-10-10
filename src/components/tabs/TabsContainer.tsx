import { Box, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { GeneralData } from "./GeneralData";
import { FacetsTab } from "./FacetsTab";

export const TabsContainer = () => {


  // API response




  return (
    <>
      {/* PANELS */}
      <Box display="flex">
        {/* General data */}

        <GeneralData results={ results } />

        <Box bgColor="#7FC7BD" w="66.66%">
          <Tabs variant="colorful">
            <TabList>
              <Tab>Facets</Tab>
              <Tab>Otra tab</Tab>
            </TabList>

            <TabPanels>
              
              {/* Facet tab */}
              <FacetsTab format={format}/>

            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};
