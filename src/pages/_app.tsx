import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  )
}
