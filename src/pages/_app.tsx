import type { AppProps } from "next/app"
import { Roboto } from "next/font/google"
import { globalStyles } from "../styles/global"
import { Container } from "../styles/pages/app";
import { Header } from "../components/Header";
import { CartContextProvider } from "../contexts/CartContext";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"]
})

globalStyles();

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <CartContextProvider>
      <Container className={roboto.className}>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
