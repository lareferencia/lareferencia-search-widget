import { Box, TabPanel } from "@chakra-ui/react";
import { ListFormats } from "./ui/list/ListFormats";
import { useEffect, useState } from "react";
import { getApi } from "../../api/api";



const CountryTab = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getApi("network_name_str");
      
      setData(response);
    };
    fetchData();

  }, []);

  return (
      <Box bgColor="#7FC7BD" p="1">
        <ListFormats format={data} />
      </Box>
  );
};

export default CountryTab;
