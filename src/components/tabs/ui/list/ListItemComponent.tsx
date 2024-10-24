import { Box, Text } from "@chakra-ui/react";

//TODO: Ignore this fn, will be deleted when we implement localization for translations
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const ListItemComponent = ({ item }: { item: any }) => {

  
  return (
    <Box as="li" listStyleType='none' >
      <Box display="flex" justifyContent="space-between" alignItems="center" gap='3'>
        
        <Box width="40%" textAlign="right">
          <Text
            fontSize='14px'
            as='span'
            fontWeight='bold'
            color="gray.700"
          >
            {item.count.toLocaleString()}
          </Text>
        </Box>

        <Box width="60%" textAlign="left">
            <Text as="span" fontSize="14px" fontWeight="semibold" color="gray.100">
            {capitalizeFirstLetter(item.translated)}
          </Text>
        </Box>

      </Box>
    </Box>
  );
};
