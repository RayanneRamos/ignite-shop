import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { globalStyles } from '../styles/global'
import Image from 'next/image';
import logoImage from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

globalStyles();

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <Container className={roboto.className}>
      <Header>
        <Image src={logoImage} alt='Logo' />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
