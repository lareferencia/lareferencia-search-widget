import { Box } from "@chakra-ui/react";
import { ListFormats } from "./ui/list/ListFormats";
import { FacetItem } from "../../interfaces/api-response";

interface CountryTabProps {
  data?: FacetItem[];
}

const CountryTab = ({ data }: CountryTabProps) => {
  return (
    <Box p="1">
      <ListFormats format={data} columnsBase={2} />
    </Box>
  );
};

export default CountryTab;
