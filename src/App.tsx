import { Box } from "@chakra-ui/react";
import { SearchContainer } from "./components/search/SearchContainer";
import { TabsContainer } from "./components/tabs/TabsContainer";

function App() {
  return (
    <Box p={2}
    >

      <SearchContainer />
      
      <TabsContainer />

    </Box>
  );
}

export default App;
