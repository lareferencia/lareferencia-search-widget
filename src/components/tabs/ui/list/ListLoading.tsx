import { Box, Skeleton } from "@chakra-ui/react";

export const ListLoading = () => {
  return Array.from({ length: 4 }).map((_, index) => (
 
    <Box as="li" listStyleType="none" key={index} px='50px' >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="4"
      >
        <Box width="50%" textAlign="right" mb={1}>
          <Skeleton height="20px" width="100%" />
        </Box>

        <Box width="50%" textAlign="left">
          <Skeleton height="20px" width="100%" />
        </Box>
      </Box>
    </Box>
  ));
};
