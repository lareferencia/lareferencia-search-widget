import { Box, List, TabPanel, SkeletonCircle } from "@chakra-ui/react";
import { PieChart } from "./charts/PieChart";
import { getApi } from "../../api/api";
import { useState, useEffect } from "react";
import { ApiResponse } from "../../types/api";
import { ListItemComponent } from "../ListItemComponent";
import { ListItemSkeleton } from "../ListItemSkeleton";
import { PieLoading } from "./ui/PieLoading";

export const FacetsTab = ({ format }) => {
  const [data, setData] = useState<ApiResponse>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getApi();
        setData(resp);
        console.log(resp);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  //get format from data

  const getFormatFromData = (data: ApiResponse) => data.facets.format;


  const renderList = () => {
    return data
      ? getFormatFromData(data).map((item) => (
          <ListItemComponent item={item} key={item.translated} />
        ))
      : renderListSkeleton();
  };

  //List skeleton
  const renderListSkeleton = () => {
    return (
      //iterate 8 times to simulate a list
      Array.from({ length: 8 }).map(() => <ListItemSkeleton />)
    );
  };

  
  return (
    <TabPanel p="0" display="flex">
      <Box bgColor="#7FC7BD" w="65%" p="6" h="auto" display="flex" alignItems="center"
      >
        <List listStyleType="-" display="flex" flexWrap="wrap" gap="4" flexDirection="row" p={2}
        >
          { /* { <ListLoading  /> } */}
        </List>
      </Box>
      <Box bgColor="#b4e2dc" w="35%" h="270px">
        {data ? (
          <PieChart data={getFormatFromData(data)} />
        ) : (
          <PieLoading />
        )}
      </Box>
    </TabPanel>
  );
};
