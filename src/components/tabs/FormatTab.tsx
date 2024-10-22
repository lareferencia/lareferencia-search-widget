import { Box, TabPanel} from "@chakra-ui/react";
import { ListFormats } from "./ui/list/ListFormats";
import { useEffect, useState } from "react";
import { getApi } from "../../api/api";


const FormatTab = () => {

  const [data, setData] = useState();

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await getApi("format");
      setData(response);
    }	
    fetchData();
  
   
  }, [])
  

  
  return (

      <Box bgColor="#7FC7BD"  p="4" >
        <ListFormats format={data}  /> 
      </Box>

  );
};

export default FormatTab;
