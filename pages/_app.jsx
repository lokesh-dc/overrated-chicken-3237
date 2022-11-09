import { ChakraProvider } from '@chakra-ui/react';
import "../Styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp