import Head from 'next/head';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/iconfont.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
