import { Box, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { GeneralData } from "./GeneralData";
import { FormatTab } from "./FormatTab";
import { LanguageTab } from "./LanguageTab";
import { CountryTab } from "./CountryTab";
import { PieLoading } from "./ui/PieLoading";
import { PieChart } from "./charts/PieChart";
import { useState } from "react";

export const TabsContainer = () => {
  // hook for api response
  const [pieChartData, setPieChartData] = useState()

  return (
    <>
      {/* PANELS */}
      <Box display="flex">
        {/* General data */}
        <GeneralData/>

        <Box bgColor="#7FC7BD" w="66.66%">

          <Tabs variant="colorful">
            <TabList>
              <Tab as='div' sx={{cursor:'pointer'}}>Tipo de documento</Tab>
              <Tab as='div' sx={{cursor:'pointer'}}>Paìs</Tab>
              <Tab as='div' sx={{cursor:'pointer'}}>Idioma</Tab>
            </TabList>

            <TabPanels>
              {/* Format tab */}
              <FormatTab setPieChartData={setPieChartData} />

              {/* Country tab */}
              <CountryTab setPieChartData={setPieChartData}/>

              {/* Language tab */}
              <LanguageTab setPieChartData={setPieChartData}/>
            </TabPanels>
          </Tabs>
          
        </Box>


        <Box
            bgColor="#b4e2dc"
            w="33.33%"
          >
            { pieChartData ? <PieChart data={pieChartData} /> : <PieLoading /> }
        </Box>
      </Box>
    </>
  );
};


