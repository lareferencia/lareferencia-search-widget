import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


const brandPrimary = defineStyle({
    background: '#F1686A',
    color: 'white',
    fontWeight: 'semibold',
    border:'none',
    _dark: {
        background: 'orange.300',
        color: 'orange.800',
    }
})

const brandSecondary = defineStyle({
    color: 'rgb(53, 88, 87)',
    fontWeight: 'semibold',
    border: '2px solid #F1686A',
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

const baseStyle = definePartsStyle({
  tab: {
    fontWeight: 'semibold',
  },
  tabpanel:{
    padding: '0',
  }
})

const colorfulVariant = definePartsStyle(() => {
    return {
      tab: {
        border: 'none',
        backgroundColor: 'transparent',
        borderBottom: '2px solid rgba(255,255,255,0.25)',
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '13px',
        _selected: {
          borderBottom: '2px solid rgba(255,255,255,0.9)',
          color: 'white',
        },
        _hover: {
          bgColor: 'rgba(255,255,255,0.05)',
          color: 'white',
        },
        _focus: {
          bgColor: 'transparent'
        }
      },
      tablist: {
        borderBottom: 'none',
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
    },
    colors: {
      glass: {
        bg: 'rgba(255, 255, 255, 0.08)',
        border: 'rgba(255, 255, 255, 0.18)',
        divider: 'rgba(255, 255, 255, 0.15)',
        textPrimary: 'rgba(255, 255, 255, 0.95)',
        textSecondary: 'rgba(255, 255, 255, 0.65)',
        countColor: 'rgba(255, 255, 255, 0.9)',
      },
    },
    layerStyles: {
      glassmorphism: {
        bg: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        borderRadius: '30px',
      },
      glassmorphismHero: {
        bg: 'rgba(13, 41, 63, 0.45)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '20px',
      },
      glassPanel: {
        borderColor: 'rgba(255, 255, 255, 0.12)',
      },
    },
})
