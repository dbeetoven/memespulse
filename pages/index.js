import Head from 'next/head'
import Layout from '../components/Layout'
import CryptoList from '../components/Crypto'

export default function Home({ tokens }) {
  const siteTitle = 'Memes Pulse'
  const description = 'Memes pulse tokens analytics from EWC, ETH, BNB. Analytics of shitcoins, memes coins,y/o no fundamental coins.'
  const siteName = 'Memes Pulse Tokens'
  return (
    <Layout title={siteTitle}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Memes Pulse</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex"/>
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" /> 
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={props.desc} />
        <meta name="twitter:site" content="https://www.memespulse.com/" />
        <meta name="twitter:creator" content="https://twitter.com/memes_pulse" />

        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={siteTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <div className="container">
        <CryptoList tokens={tokens} />
      </div>
    </Layout>
  )
}
export async function getStaticProps(context) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&category=meme-token&=`
  )
  let tokens = await res.json()

  if (!tokens) {
    return {
      notFound: true,
    }
  }else{
   tokens= tokens.map(token=>{
    token.url=`https://www.coingecko.com/en/coins/${token.id}`
    return token
   })
  }
  return {
    props: { tokens },
  }
}
