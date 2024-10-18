import { Box, SkeletonCircle } from "@chakra-ui/react";

export const PieLoading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100%"
      p="5px"
    >
      <SkeletonCircle size="200" />
    </Box>
  );
};
