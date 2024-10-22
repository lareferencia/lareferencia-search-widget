import { Box, Button, Input, Select } from "@chakra-ui/react"
import { useState } from "react"

export const SearchContainer = () => {

  // get data from the input

  const [search, setSearch] = useState('')
  const [field, setField] = useState('AllFields')
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.open(`https://www.lareferencia.info/vufind/Search/Results?lookfor=${search}&type=${field}`, '_blank')
  }
  

  return (
    <Box
    onSubmit={handleSubmit} 
    as="form" display="flex" gap="2" mb='3'>
        {/* SEARCH */}
        <Box w="80%">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Ingresar texto" 
            style={{height:'50px', border:'1px solid', borderColor:'#A0AEC0'}} />
        </Box>

        <Box w='20%'>
          <Select p='0px' h='50px' border='1px solid' borderColor='gray.400' onChange={(e)=>setField(e.target.value)}>
            <Box as="option" value="AllFields">Todos los campos</Box>
            <Box as="option" value="Author">Titulo</Box>
            <Box as="option" value="Title">Autor</Box>
            <Box as="option" value="Subject">Materia</Box>
            <Box as="option" value="network_name_str">País</Box>
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
