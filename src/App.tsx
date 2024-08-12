import { Box, Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react'


function App() {
  return (
    <Box p='2'>
      <Box display='flex'>
        <Input placeholder="Basic usage" />
        <Select placeholder="Select option" w='18px'>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Button colorScheme="teal">Button</Button>
        <Button colorScheme="teal" variant="outline">Búsqueda avanzada</Button>
      </Box>
    </Box>
  );
}

export default App;
