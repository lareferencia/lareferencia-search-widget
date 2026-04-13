import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { GeneralData } from "./GeneralData";
import { PieLoading } from "./ui/PieLoading";
import { PieChart } from "./charts/PieChart";
import React, { Suspense, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { useWidgetData } from "../../hooks/useWidgetData";
import { FacetItem } from "../../interfaces/api-response";

const FormatTab = React.lazy(() => import("./FormatTab"));
const CountryTab = React.lazy(() => import("./CountryTab"));
const LanguageTab = React.lazy(() => import("./LanguageTab"));

export const TabsContainer = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { t } = useTranslation();
  const { data, loading } = useWidgetData();

  const pieData: FacetItem[] | undefined = data
    ? [data.formats, data.networks, data.languages][tabIndex]
    : undefined;

  return (
    <Box layerStyle="glassmorphism" overflow="hidden">

      {/* ── TOP: Tabs full width ── */}
      <Box borderBottom="1px solid rgba(255,255,255,0.1)">
        <Tabs variant="colorful" onChange={(i) => setTabIndex(i)}>
          <TabList px={4} gap={1}>
            <Tab pb={3} pt={3}>{t('typeOfDocument')}</Tab>
            <Tab pb={3} pt={3}>{t('country')}</Tab>
            <Tab pb={3} pt={3}>{t('language')}</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={4} pt={3}>
              <Suspense>
                <FormatTab data={data?.formats} />
              </Suspense>
            </TabPanel>
            <TabPanel p={4} pt={3}>
              <Suspense>
                <CountryTab data={data?.networks} />
              </Suspense>
            </TabPanel>
            <TabPanel p={4} pt={3}>
              <Suspense>
                <LanguageTab data={data?.languages} />
              </Suspense>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* ── BOTTOM ROW: Stats + Chart ── */}
      <Box
        display="grid"
        gridTemplateColumns={{ base: '1fr', lg: '1fr 2fr' }}
        minH="140px"
      >
        {/* Stats */}
        <Box borderRight={{ base: 'none', lg: '1px solid rgba(255,255,255,0.1)' }}
             borderTop={{ base: '1px solid rgba(255,255,255,0.1)', lg: 'none' }}>
          <GeneralData resultCount={data?.resultCount} loading={loading} />
        </Box>

        {/* Pie chart */}
        <Box
          h={{ base: '200px', lg: '160px' }}
          borderTop={{ base: '1px solid rgba(255,255,255,0.1)', lg: 'none' }}
        >
          {pieData ? <PieChart data={pieData} /> : <PieLoading />}
        </Box>
      </Box>

    </Box>
  );
};
