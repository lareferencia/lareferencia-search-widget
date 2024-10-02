import { Box, Button, Input, Select } from "@chakra-ui/react"

export const SearchContainer = () => {
  return (
    <Box display="flex" gap="2" mb='2'>
        {/* SEARCH */}
        <Box w="68%">
          <Input h='50px' placeholder="Ingresar texto" />
        </Box>

        <Box>
          <Select placeholder="Todos los campos" h='50px'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box>
          <Button h='50px' variant="brandPrimary">Buscar</Button>
        </Box>
        <Box>
          <Button h='50px' variant="brandSecondary">Búsqueda avanzada</Button>
        </Box>
      </Box>
  )
}
