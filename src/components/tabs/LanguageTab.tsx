import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getApi } from "../../api/api";
import { ListFormats } from "./ui/list/ListFormats";

const LanguageTab = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi("language");
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <Box bgColor="#7FC7BD" p="1">
      <ListFormats format={data?.slice(0, 6)} />
    </Box>
  );
};

export default LanguageTab;
