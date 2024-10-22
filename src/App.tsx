import { Box } from "@chakra-ui/react";
import { SearchContainer } from "./components/search/SearchContainer";
import { TabsContainer } from "./components/tabs/TabsContainer";

function App() {
  return (
    <Box >
      <SearchContainer />

      <TabsContainer />
    </Box>
  );
}

export default App;
