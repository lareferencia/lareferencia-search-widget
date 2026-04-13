import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "../../../../hooks/useTranslation";
import { FacetItem } from "../../../../interfaces/api-response";

const capitalizeFirstLetter = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

interface ListItemComponentProps {
  item: FacetItem;
  maxCount: number;
}

export const ListItemComponent = ({ item, maxCount }: ListItemComponentProps) => {
  const { t } = useTranslation();
  const pct = maxCount > 0 ? (item.count / maxCount) * 100 : 0;

  return (
    <Box as="li" listStyleType="none" py="3px">
      {/* Label + count */}
      <Box display="flex" justifyContent="space-between" alignItems="baseline" mb="4px">
        <Text fontSize="12px" fontWeight="600" color="rgba(255,255,255,0.75)" noOfLines={1}>
          {capitalizeFirstLetter(t(item.value))}
        </Text>
        <Text fontSize="11px" fontWeight="700" color="rgba(255,255,255,0.55)" ml={2} flexShrink={0}>
          {item.count.toLocaleString()}
        </Text>
      </Box>

      {/* Progress bar */}
      <Box h="3px" bg="rgba(255,255,255,0.08)" borderRadius="full" overflow="hidden">
        <Box
          h="100%"
          w={`${pct}%`}
          bg="rgba(118,191,190,0.8)"
          borderRadius="full"
          transition="width 0.6s ease"
        />
      </Box>
    </Box>
  );
};
