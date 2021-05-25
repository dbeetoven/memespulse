
import Layout from '../components/Layout'
import CryptoList from '../components/Crypto'

export default function Home({ tokens }) {
  return (
    <Layout>
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
