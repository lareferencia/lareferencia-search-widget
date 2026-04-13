import { Box } from "@chakra-ui/react";
import { ListFormats } from "./ui/list/ListFormats";
import { FacetItem } from "../../interfaces/api-response";

interface LanguageTabProps {
  data?: FacetItem[];
}

const LanguageTab = ({ data }: LanguageTabProps) => {
  return (
    <Box p="1">
      <ListFormats format={data?.slice(0, 6)} />
    </Box>
  );
};

export default LanguageTab;
