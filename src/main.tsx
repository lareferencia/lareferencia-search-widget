import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import App from './App.tsx'
import { theme } from './theme/theme.ts'

const host = document.getElementById('lareferencia-searchbox')!

// Isolate the widget from the host page's global CSS (p, h2, etc.) using Shadow DOM.
const shadowRoot = host.shadowRoot ?? host.attachShadow({ mode: 'open' })

// Emotion styles are injected inside the shadow root instead of document.head.
const emotionCache = createCache({ key: 'lrw', container: shadowRoot })

// @font-face must live in the main document (it does not work inside a shadow root).
const FONT_LINK_ID = 'lrw-titillium-web'
if (!document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement('link')
  link.id = FONT_LINK_ID
  link.rel = 'stylesheet'
  link.href =
    'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700;900&display=swap'
  document.head.appendChild(link)
}

const mountPoint = document.createElement('div')
mountPoint.style.fontFamily = "'Titillium Web', sans-serif"
shadowRoot.appendChild(mountPoint)

createRoot(mountPoint).render(
  <StrictMode>
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme} cssVarsRoot=":host">
        <App />
      </ChakraProvider>
    </CacheProvider>
  </StrictMode>,
)
