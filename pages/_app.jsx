// pages/_app.js
import { ChakraProvider, Img } from '@chakra-ui/react'

// import styles from "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp