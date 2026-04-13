import { Box, Skeleton, Text } from "@chakra-ui/react";
import { useTranslation } from "../../hooks/useTranslation";

interface GeneralDataProps {
  resultCount?: number;
  loading: boolean;
}

export const GeneralData = ({ resultCount, loading }: GeneralDataProps) => {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      gap={5}
      p={5}
      h="100%"
    >
      <StatItem
        value="12"
        label={t('nationalNodes')}
      />
      <StatItem
        value={loading ? null : (resultCount?.toLocaleString() ?? '—')}
        label={t('documents')}
        loading={loading}
      />
    </Box>
  );
};

interface StatItemProps {
  value: string | null;
  label: string;
  loading?: boolean;
}

const StatItem = ({ value, label, loading }: StatItemProps) => (
  <Box>
    {loading ? (
      <Skeleton h="32px" w="90px" mb={1} startColor="whiteAlpha.200" endColor="whiteAlpha.100" borderRadius="md" />
    ) : (
      <Text
        fontSize="2xl"
        fontWeight="800"
        color="white"
        lineHeight="1"
        letterSpacing="-0.5px"
      >
        {value}
      </Text>
    )}
    <Text
      fontSize="11px"
      fontWeight="600"
      color="rgba(255,255,255,0.5)"
      textTransform="uppercase"
      letterSpacing="0.08em"
      mt="4px"
    >
      {label}
    </Text>
  </Box>
);
