import { Box, Divider, Skeleton, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getApi } from "../../api/api";
import { useTranslation } from "../../hooks/useTranslation";



export const GeneralData = () => {

  const [data, setData] = useState<number>()
  const { t } = useTranslation();

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await getApi('')  
          
      setData(response.resultCount)
    }
    fetchData();
     
  }, [])
  
  return (
    <Box
      bgColor="#68b9b7"
      w="33.33%"
      // py="10"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      p={4}
      borderBottomLeftRadius={6}
      borderTopLeftRadius={6}
    >
      <Box>
        <Box display="flex" justifyContent="center">
          <Text
            textAlign="center"
            as="span"
            fontSize="2xl"
            fontWeight="semibold"
            color="white"
          >
            12
          </Text>
        </Box>
        <Text as="span" fontSize="2xl" fontWeight="semibold" color="white">
          {t('nationalNodes')}
        </Text>
      </Box>
      <Divider my="3" w="50%" />
      <Box>
        {data ? (
          <>
            <Box display="flex" justifyContent="center">
              <Text
                textAlign="center"
                as="span"
                fontSize="2xl"
                fontWeight="semibold"
                color="white"
              >
                {data.toLocaleString()}
              </Text>
            </Box>
            <Text as="span" fontSize="2xl" fontWeight="semibold" color="white">
              {t('documents')}
            </Text>
          </>
        ) : (
          <Skeleton w="300px" h="20px" />
        )}
      </Box>
    </Box>
  );
};
