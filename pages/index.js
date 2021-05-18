import Head from 'next/head'
import Layout from '../components/Layout'
import CryptoList from '../components/Crypto'

export default function Home({ tokens }) {
  const siteTitle = 'Memes Pulse'
  const description = 'Memes pulse tokens of EWC, ETH, BNB ect...'
  const siteName = 'Memes Pulse, Shitcoins'
  return (
    <Layout title={siteTitle}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Memes Pulse</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <div>
        <CryptoList tokens={tokens} />
      </div>
    </Layout>
  )
}
export async function getStaticProps(context) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&category=meme-token&=`
  )
  const tokens = await res.json()

  if (!tokens) {
    return {
      notFound: true,
    }
  }
  return {
    props: { tokens },
  }
}
