import { Box } from "@chakra-ui/react";
import { ListFormats } from "./ui/list/ListFormats";
import { FacetItem } from "../../interfaces/api-response";

interface FormatTabProps {
  data?: FacetItem[];
}

const FormatTab = ({ data }: FormatTabProps) => {
  return (
    <Box p="1">
      <ListFormats format={data} />
    </Box>
  );
};

export default FormatTab;
