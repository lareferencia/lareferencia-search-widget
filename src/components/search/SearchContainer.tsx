import { Box, Button, Input, Select } from "@chakra-ui/react"
import { useState } from "react"
import { useTranslation } from "../../hooks/useTranslation";

export const SearchContainer = () => {

  // get data from the input

  const { t } = useTranslation();
  const [search, setSearch] = useState('')
  const [field, setField] = useState('AllFields')
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.open(`https://www.lareferencia.info/vufind/Search/Results?lookfor=${search}&type=${field}`, '_blank')
  }
  

  return (
    <Box
    onSubmit={handleSubmit} 
    as="form" display="flex" gap="2" my='6'>
        {/* SEARCH */}
        <Box w="80%">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder={t('startToSearch')} 
            style={{height:'50px', border:'2px solid', borderColor:'#6b6e72', borderRadius: '6px'}} />
        </Box>

        <Box w='20%'>
          <Select p='0px' h='50px' onChange={(e)=>setField(e.target.value)} 
            style={{height:'50px', border:'2px solid', borderColor:'#6b6e72', borderRadius: '6px', paddingTop:'0px'}}>
            <Box as="option" value="AllFields">{t('allFields')}</Box>
            <Box as="option" value="Author">{t('title')}</Box>
            <Box as="option" value="Title">{t('author')}</Box>
            <Box as="option" value="Subject">{t('subject')}</Box>
            <Box as="option" value="network_name_str">{t('country')}</Box>
          </Select>
        </Box>
        <Box>
          <Button type="submit" h='50px' variant="brandPrimary">{t('search')}</Button>
        </Box>
        <Box>
          <Button as='a' href="https://www.lareferencia.info/vufind/Search/Advanced" target="_blank" h='50px' variant="brandSecondary">{t('advancedSearch')}</Button>
        </Box>
      </Box>
  )
}
