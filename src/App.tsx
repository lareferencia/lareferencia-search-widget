import { Box } from "@chakra-ui/react";
import { SearchContainer } from "./components/search/SearchContainer";
import { TabsContainer } from "./components/tabs/TabsContainer";

function App() {
  return (
    <Box
      minHeight="100vh"
      maxW="1440px"
      m="auto"
      display="flex"
      flexDir="column"
      justifyContent="center"
      gap="2"
    >
      <SearchContainer />
      <TabsContainer />
    </Box>
  );
}

export default App;
