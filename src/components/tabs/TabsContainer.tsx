import { Box, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { GeneralData } from "./GeneralData";
import { FacetsTab } from "./FacetsTab";
import { getApi } from "../../api/api";
import { useEffect, useState } from "react";
import { ApiResponse } from "../../types/api";

export const TabsContainer = () => {
  // hook for api response
  const [data, setData] = useState<ApiResponse>();

  useEffect(() => {
    // API response
    const fetchData = async () => {
      try {
        const resp = await getApi();
        setData(resp);
        console.log(resp);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* PANELS */}
      <Box display="flex">
        {/* General data */}
        <GeneralData results={ data?.resultCount } />
        <Box bgColor="#7FC7BD" w="66.66%">
          <Tabs variant="colorful">
            <TabList>
              <Tab>Facets</Tab>
              <Tab>Otra tab</Tab>
            </TabList>

            <TabPanels>
              {/* Facet tab */}
              <FacetsTab format={data?.facets.format}/>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};
