import { Box, Text } from "@chakra-ui/react";

//TODO: Ignore this fn, will be deleted when we implement localization for translations
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const ListItemComponent = ({ item }: { item: any }) => {

  
  return (
    <Box as="li" listStyleType='none' >
      <Box display="flex" justifyContent="space-between" alignItems="center" gap='4'>
        
        <Box width="50%" textAlign="right">
          <Text
            as='span'
            fontWeight='bold'
            color="gray.700"
          >
            {item.count.toLocaleString()}
          </Text>
        </Box>

        <Box width="50%" textAlign="left">
            <Text as="span" fontSize="md" fontWeight="semibold" color="gray.100">
            {capitalizeFirstLetter(item.translated)}
          </Text>
        </Box>

      </Box>
    </Box>
  );
};
