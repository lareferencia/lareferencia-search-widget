import { Box, Button, Input, Select } from "@chakra-ui/react"

export const SearchContainer = () => {
  return (
    <Box display="flex" gap="2">
        {/* SEARCH */}
        <Box w="68%">
          <Input placeholder="Ingresar texto" />
        </Box>

        <Box>
          <Select placeholder="Todos los campos">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box>
          <Button variant="brandPrimary">Buscar</Button>
        </Box>
        <Box>
          <Button variant="brandSecondary">Búsqueda avanzada</Button>
        </Box>
      </Box>
  )
}
