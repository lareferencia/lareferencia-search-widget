import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Skeleton } from "@chakra-ui/react";
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

      {/* ── HEADER: Pills (izq) + Stats (der) en una sola fila ── */}
      <Tabs variant="pill" onChange={(i) => setTabIndex(i)}>
        <Box
          borderBottom="1px solid rgba(255,255,255,0.10)"
          px={3}
          py={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          {/* Stats compactas */}
          <Box display="flex" gap={2} flexShrink={0}>
            <StatChip
              value={data?.networks?.length?.toString()}
              label={t('nationalNodes')}
              loading={loading}
            />
            <StatChip
              value={data?.resultCount?.toLocaleString()}
              label={t('documents')}
              loading={loading}
            />
          </Box>

          {/* Pills de navegación */}
          <TabList gap={1} flexShrink={0}>
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

interface StatChipProps {
  value?: string;
  label: string;
  loading: boolean;
}

const StatChip = ({ value, label, loading }: StatChipProps) => (
  <Box
    px={3}
    py="6px"
    textAlign="center"
    borderRadius="10px"
    bg="rgba(255,255,255,0.18)"
    backdropFilter="blur(8px)"
    WebkitBackdropFilter="blur(8px)"
    minW="70px"
  >
    {loading ? (
      <Skeleton h="16px" w="50px" mb="2px" startColor="whiteAlpha.200" endColor="whiteAlpha.100" borderRadius="md" />
    ) : (
      <Text fontSize="md" fontWeight="800" color="white" lineHeight="1" letterSpacing="-0.3px">
        {value ?? '—'}
      </Text>
    )}
    <Text
      fontSize="9px"
      fontWeight="600"
      color="rgba(255,255,255,0.50)"
      textTransform="uppercase"
      letterSpacing="0.08em"
      mt="2px"
    >
      {label}
    </Text>
  </Box>
);
