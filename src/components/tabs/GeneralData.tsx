import { Box, Skeleton, Text } from "@chakra-ui/react";
import { useTranslation } from "../../hooks/useTranslation";

interface GeneralDataProps {
  resultCount?: number;
  loading: boolean;
}

export const GeneralData = ({ resultCount, loading }: GeneralDataProps) => {
  const { t } = useTranslation();

  const items = [
    { value: "12", label: t('nationalNodes') },
    { value: loading ? null : (resultCount?.toLocaleString() ?? '—'), label: t('documents'), loading },
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
          py={3}
          borderRight={i < items.length - 1 ? "1px solid rgba(255,255,255,0.12)" : undefined}
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
      <Skeleton h="32px" w="90px" mb={1} startColor="whiteAlpha.200" endColor="whiteAlpha.100" borderRadius="md" />
    ) : (
      <Text
        fontSize="3xl"
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
      color="rgba(255,255,255,0.55)"
      textTransform="uppercase"
      letterSpacing="0.1em"
      mt="4px"
    >
      {label}
    </Text>
  </Box>
);
