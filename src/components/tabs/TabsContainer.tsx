import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { GeneralData } from "./GeneralData";

import { PieLoading } from "./ui/PieLoading";
import { PieChart } from "./charts/PieChart";
import React, { Suspense, useEffect, useState } from "react";
import { getApi } from "../../api/api";

const FormatTab = React.lazy(() => import("./FormatTab"));
const CountryTab = React.lazy(() => import("./CountryTab"));
const LanguageTab = React.lazy(() => import("./LanguageTab"));

export const TabsContainer = () => {
  // hook for api response
  const [data, setData] = useState();
  const [tabIndex, setTabIndex] = useState(0)


  const fetchData = async () => {
    let param: string = "";
    switch (tabIndex) {
      case 0:
        param = "format";
        break;
      case 1:
        param = "network_name_str";
        break;
      case 2:
        param = "language";
        break;
      default:
        break;
    }
    
    try {
      const response = await getApi(param);
      setData(response);
    } catch (error) {
      console.log(error);
      
    }
    
  };

  useEffect(() => {
    fetchData();
  
    
  }, [tabIndex])
  



  return (
    <>
      {/* PANELS */}
      <Box display="flex" h='220px'>
        {/* General data */}
        <GeneralData/>

        <Box bgColor="#7FC7BD" w="66.66%">

          <Tabs variant="colorful" onChange={(i) => setTabIndex(i)} h='100%'>
            <TabList>
              <Tab style={{ color: '#355857' }}>Tipo de documento</Tab>
              <Tab style={{ color: '#355857'}}>País</Tab>
              <Tab style={{ color: '#355857'}} >Idioma</Tab>
            </TabList>

            <TabPanels display='flex' flexDir='column' justifyContent='center' h='calc(100% - 35px)'>
              <TabPanel padding={0}>
                {tabIndex === 0 &&  (
                  <Suspense >
                    <FormatTab />
                  </Suspense>
                )}
              </TabPanel>

              <TabPanel>
                {tabIndex === 1 && (
                  <Suspense >
                    <CountryTab />
                  </Suspense>
                )}
              </TabPanel>

              <TabPanel>
                {tabIndex === 2 && (
                  <Suspense >
                    <LanguageTab />
                  </Suspense>
                )}
              </TabPanel>

            </TabPanels>
          </Tabs>
          
        </Box>


        <Box
            bgColor="#b4e2dc"
            w="33.33%"
            borderBottomRightRadius={6}
            borderTopRightRadius={6}
          >
            { data ? <PieChart data={data} /> : <PieLoading /> }
        </Box>

      </Box>
    </>
  );
};


