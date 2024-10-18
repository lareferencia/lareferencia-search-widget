import { Box, Button, Input, Select } from "@chakra-ui/react"
import { useState } from "react"

export const SearchContainer = () => {

  // get data from the input

  const [search, setSearch] = useState('')
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  

  return (
    <Box
    onSubmit={handleSubmit} 
    as="form" display="flex" gap="2" mb='3'>
        {/* SEARCH */}
        <Box w="70%">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
           h='50px' placeholder="Ingresar texto" border='1px solid' borderColor='gray.400' />
        </Box>

        <Box>
          <Select placeholder="Todos los campos" h='50px' border='1px solid' borderColor='gray.400'>
            <Box as="option" value="option1">Titulo</Box>
            <option value="option2">Autor</option>
            <option value="option3">Materia</option>
            <option value="option4">País</option>
          </Select>
        </Box>
        <Box>
          <Button type="submit" h='50px' variant="brandPrimary">Buscar</Button>
        </Box>
        <Box>
          <Button as='a' href="https://www.lareferencia.info/vufind/Search/Advanced" target="_blank" h='50px' variant="brandSecondary">Búsqueda avanzada</Button>
        </Box>
      </Box>
  )
}
