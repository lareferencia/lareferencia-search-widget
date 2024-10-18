import { Box, Skeleton } from "@chakra-ui/react";

export const ListLoading = () => {
  return Array.from({ length: 4 }).map((_, index) => (
 
    <Box as="li" listStyleType="none" key={index}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="4"
      >
        <Box width="50%" textAlign="right" mb={2}>
          <Skeleton height="20px" width="80%" />
        </Box>

        <Box width="50%" textAlign="left">
          <Skeleton height="20px" width="80%" />
        </Box>
      </Box>
    </Box>
  ));
};
