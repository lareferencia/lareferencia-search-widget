import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { GeneralData } from "./GeneralData";
import { PieLoading } from "./ui/PieLoading";
import { BarChart } from "./charts/BarChart";
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
    <Box layerStyle="glassmorphismHero" overflow="hidden">

      {/* ── TOP: GeneralData ── */}
      <Box borderBottom="1px solid rgba(255,255,255,0.10)">
        <GeneralData resultCount={data?.resultCount} networkCount={data?.networks?.length} loading={loading} />
      </Box>

      {/* ── MIDDLE: Tabs (pill style) ── */}
      <Tabs variant="pill" onChange={(i) => setTabIndex(i)}>
        <Box
          borderBottom="1px solid rgba(255,255,255,0.08)"
          px={3}
          py={2}
        >
          <TabList gap={1}>
            <Tab>{t('typeOfDocument')}</Tab>
            <Tab>{t('country')}</Tab>
            <Tab>{t('language')}</Tab>
          </TabList>
        </Box>

        <TabPanels>
          <TabPanel p={3} pt={2}>
            <Suspense>
              <FormatTab data={data?.formats} />
            </Suspense>
          </TabPanel>
          <TabPanel p={3} pt={2}>
            <Suspense>
              <CountryTab data={data?.networks} />
            </Suspense>
          </TabPanel>
          <TabPanel p={3} pt={2}>
            <Suspense>
              <LanguageTab data={data?.languages} />
            </Suspense>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* ── BOTTOM: Bar Chart ── */}
      <Box borderTop="1px solid rgba(255,255,255,0.10)" h="150px">
        {pieData ? <BarChart data={pieData} /> : <PieLoading />}
      </Box>

    </Box>
  );
};
