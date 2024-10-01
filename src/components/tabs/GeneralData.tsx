import { Box, Divider, Text } from '@chakra-ui/react'

export const GeneralData = () => {
  return (
    <Box bgColor="#68b9b7" w="33.33%" py="10" borderTopLeftRadius={8} borderBottomLeftRadius={8} display="flex" justifyContent="center" alignItems="center" flexDir="column" >
      <Box>
        <Text as="span" fontSize="3xl" fontWeight="semibold" color="white">
          <b>12</b> - Nodos nacionales
        </Text>
      </Box>
      <Divider my="3" w="50%" />
      <Box>
        <Text as="span" fontSize="3xl" fontWeight="semibold" color="white">
          <b>5.016.521</b> - Documentos
        </Text>
      </Box>
    </Box>
  )
}
