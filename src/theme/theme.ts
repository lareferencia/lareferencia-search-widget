import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


const brandPrimary = defineStyle({
    background: '#F1686A',
    color: 'white',
    fontWeight: 'semibold',
    border:'none',

    // let's also provide dark mode alternatives
    _dark: {
        background: 'orange.300',
        color: 'orange.800',
    }
})

const brandSecondary = defineStyle({
    color: 'rgb(53, 88, 87)',
    fontWeight: 'semibold',
    border: '2px solid #F1686A',
  
    // let's also provide dark mode alternatives
    _dark: {
      background: 'orange.300',
      color: 'orange.800',
    }
})



const buttonTheme = defineStyleConfig({
    variants: { brandPrimary, brandSecondary },
})

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    fontWeight: 'semibold', // change the font weight
  },
  tabpanel:{
    padding: '0',
  }
})

// export the component theme

const colorfulVariant = definePartsStyle(() => {
  
    return {
      tab: {
        border: 'none',
        backgroundColor: 'transparent',
        borderBottom: '3px solid #b4e2dc',
        fontWeight: 'bold',
        color: '#355857',
        _selected: {
          borderBottom: '3px solid #68b9b7',
        },
        _hover: {
          bgColor: 'transparent'
        },
        _focus: {
          bgColor: 'transparent'
        }
      },
      tablist: {
      },
      tabpanel: {
        borderBottomRadius: 'lg',
        borderTopRightRadius: 'lg',
      },
    }
  })
  
  const variants = {
    colorful: colorfulVariant,
  }
  


const tabsTheme = defineMultiStyleConfig({ baseStyle, variants })

export const theme = extendTheme({
    components: { Button: buttonTheme, Tabs: tabsTheme },
    fonts:{
      body: `'Titillium-Web', sans-serif`,
    }
})

