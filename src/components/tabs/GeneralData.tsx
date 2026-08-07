import { Box, Skeleton, Text } from "@chakra-ui/react";
import { useTranslation } from "../../hooks/useTranslation";

interface GeneralDataProps {
  resultCount?: number;
  networkCount?: number;
  loading: boolean;
}

export const GeneralData = ({ resultCount, networkCount, loading }: GeneralDataProps) => {
  const { t } = useTranslation();

  const items = [
    { value: loading ? null : (resultCount?.toLocaleString() ?? '—'), label: t('documents'), loading },
    { value: loading ? null : (networkCount?.toString() ?? '—'), label: t('nationalNodes'), loading },
  ];

  return (
    <Box
      display="flex"
      flexDir="row"
      gap={0}
      h="100%"
    >
      {items.map((item, i) => (
        <Box
          key={item.label}
          flex="1"
          px={4}
          py={2}
          borderRight={i < items.length - 1 ? "1px solid rgba(255,255,255,0.10)" : undefined}
          display="flex"
          alignItems="center"
          gap={2}
        >
          <StatItem
            value={item.value ?? null}
            label={item.label}
            loading={item.loading}
          />
        </Box>
      ))}
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
      <Skeleton h="22px" w="70px" mb="2px" startColor="whiteAlpha.200" endColor="whiteAlpha.100" borderRadius="md" />
    ) : (
      <Text
        fontSize="xl"
        fontWeight="800"
        color="white"
        lineHeight="1"
        letterSpacing="-0.5px"
      >
        {value}
      </Text>
    )}
    <Text
      fontSize="10px"
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
