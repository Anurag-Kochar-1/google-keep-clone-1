import '../styles/globals.ts'
import type { AppProps } from 'next/app'
import { AuthUserDetailsContextWrapper } from "../context/AuthUserDetailsContext"


export default function App({ Component, pageProps }: AppProps) {
  return (
      <AuthUserDetailsContextWrapper>
        <Component {...pageProps} />
      </AuthUserDetailsContextWrapper>
  )
}
