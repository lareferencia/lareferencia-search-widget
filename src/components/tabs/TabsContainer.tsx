import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { GeneralData } from "./GeneralData";

import { PieLoading } from "./ui/PieLoading";
import { PieChart } from "./charts/PieChart";
import React, { Suspense, useEffect, useState } from "react";
import { getApi } from "../../api/api";
import { useTranslation } from "../../hooks/useTranslation";

const FormatTab = React.lazy(() => import("./FormatTab"));
const CountryTab = React.lazy(() => import("./CountryTab"));
const LanguageTab = React.lazy(() => import("./LanguageTab"));

export const TabsContainer = () => {
  // hook for api response
  const [data, setData] = useState();
  const [tabIndex, setTabIndex] = useState(0)
  const { t } = useTranslation();


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
      <Box
        display="flex"
        flexDir={{ base: 'column', lg: 'row' }}
        h={{ base: 'auto', lg: '250px' }}
        border='1px solid white'
        borderRadius='30px'
        overflow="hidden"
      >
        {/* General data */}
        <GeneralData />

        <Box
          w={{ base: '100%', lg: '66.66%' }}
          borderLeft={{ base: 'none', lg: '1px solid white' }}
          borderRight={{ base: 'none', lg: '1px solid white' }}
          borderTop={{ base: '1px solid white', lg: 'none' }}
          borderBottom={{ base: '1px solid white', lg: 'none' }}
        >

          <Tabs variant="colorful" onChange={(i) => setTabIndex(i)} h='100%'>
            <TabList display="flex" w="100%">
              <Tab flex={1} style={{ color: 'white' }}>{t('typeOfDocument')}</Tab>
              <Tab flex={1} style={{ color: 'white' }}>{t('country')}</Tab>
              <Tab flex={1} style={{ color: 'white' }} >{t('language')}</Tab>
            </TabList>

            <TabPanels display='flex' flexDir='column' justifyContent='center' h='calc(100% - 35px)'>
              <TabPanel padding={0}>
                {tabIndex === 0 && (
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
          w={{ base: '100%', lg: '33.33%' }}
          p={{ base: 4, lg: 0 }}
        >
          {data ? <PieChart data={data} /> : <PieLoading />}
        </Box>

      </Box >
    </>
  );
};


