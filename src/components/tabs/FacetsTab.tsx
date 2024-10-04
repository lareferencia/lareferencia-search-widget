import { Box, List, TabPanel, Skeleton, SkeletonCircle, ListItem, Text } from "@chakra-ui/react";
import { PieChart } from "./charts/PieChart";
import { getApi } from "../../api/api";
import { useState, useEffect } from "react";
import { ApiResponse } from "../../types/api";
import { ListItemComponent } from "../ListItemComponent";
import { ListItemSkeleton } from "../ListItemSkeleton";

export const FacetsTab = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getApi();
        setData(resp);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  
  //get format from data
  const getFormatFromData = (data: ApiResponse) => data.facets.format;

  const renderList = () => {
    return data ?
      getFormatFromData(data).map((item, index) => (
        <ListItemComponent item={item} index={index} />
      ))
      : renderListSkeleton();
  };

  //List skeleton
  const renderListSkeleton = () => {
    return (
      //iterate 8 times to simulate a list
      Array.from({ length: 8 }).map(() => (
        <ListItemSkeleton />
      ))
    )
  }

  const renderChart = () => {
    return data ?
      <PieChart data={getFormatFromData(data)} />
      : renderPieSkeleton();
  };

  //chart skeleton
  const renderPieSkeleton = () => {
    return (
      <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: 'center', padding: "5px" }}>
        <SkeletonCircle size='200' />
      </div>
    );
  }


  return (
    <TabPanel p="0" display="flex">
      <Box bgColor="#7FC7BD" w="65%" p="6" h='auto' display='flex' alignItems='center'>
        <List listStyleType='-' display='flex' flexWrap='wrap' gap='4' flexDirection='row' p={2}>
          {renderList()}
        </List>
      </Box>
      <Box bgColor="#b4e2dc" w="35%" h='250px'>
        {renderChart()}
      </Box>
    </TabPanel>
  );
};