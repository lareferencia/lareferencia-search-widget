import { Box, TabPanel} from "@chakra-ui/react";
import { PieChart } from "./charts/PieChart";
import { PieLoading } from "./ui/PieLoading";
import { Format } from "../../types/api";
import { ListFormats } from "./ui/list/ListFormats";

type Props = {
  format: Format[] | undefined;
}

export const FacetsTab = ({ format }:Props) => {

  
  return (
    <TabPanel p="0" display="flex">
      <Box bgColor="#7FC7BD" w="65%" p="6" h="auto" display="flex" alignItems="center">
          <ListFormats format={format}  /> 
      </Box>
      <Box bgColor="#b4e2dc" w="35%" h="270px">
        {format ? (
          <PieChart data={format} />
        ) : (
          <PieLoading />
        )}
      </Box>
    </TabPanel>
  );
};
