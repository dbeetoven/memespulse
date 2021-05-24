import { useQuery } from '@apollo/client'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { EDOGE_TOKEN_DATA } from '../../services/api/edoge-query'
import { SMUDGE_TOKEN_DATA } from '../../services/api/smudge-query'
import { currencyFormat, formatter } from '../../utils/formatCurrency'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareUp } from '@fortawesome/free-solid-svg-icons'

const SMUDGE =
  'https://carbonswap.exchange/#/swap?inputCurrency=0x3dae074a5b125b9847e41b5ee20ac86d92ab77b1'

const getCarbonswapMemesData = (smudge, supply, imgURl) => {
  return {
    id:"smudge--id",
    current_price: Number(smudge[0]?.priceUSD),
    total_supply: supply,
    price_change_24h: Number(smudge[0]?.priceUSD) - Number(smudge[1]?.priceUSD),
    market_cap:  supply* Number(smudge[0]?.priceUSD),
    market_cap_change_24h:(Number(smudge[0]?.priceUSD)*100000)-(Number(smudge[1]?.priceUSD)*100000),
    image: imgURl,
    name:smudge[0]?.token.name,
    symbol:smudge[0]?.token.symbol,
    total_volume:23142343,
    url: 'https://smudgecoin.xyz/'
  }
}

export default function CryptoList({ tokens }) {
const {data,loading,error} = useQuery(SMUDGE_TOKEN_DATA)
  let _tokens = []
  let smudge

  if (loading) {
    return (
      <>
          <div classNameName="loading">
            <div classNameName="loader"></div>
          </div>
      </>
    )
  }

  if (error) {
    console.error(error)
    return null
  }

  if (data) {
    _tokens = [getCarbonswapMemesData(data.tokenDayDatas,100000,'/smudge.jpg'),...tokens]
  }

  return (
    <>
<div className="table-container">
  <ul className="responsive-table">

    <li className="table-header">
    <div className="col col-0 text-title text-center">Image</div>
      <div className="col col-1 text-title text-center">Token</div>
      <div className="col col-2 text-title text-center">Symbol</div>
      <div className="col col-3 text-title text-center">Price $USD</div>
      <div className="col col-4 text-title text-center">Market Cap</div>
    </li>
    {_tokens.map((token) => (
    <li className="table-row" key={token.id}   onClick={() => window.open(token.url)}>
      <div className="col col-0 text-center" data-label=""><img classNameName="avatar" src={token.image} alt={token.name}/></div>
      <div className="col col-1 text-center  text-capitalize" data-label="Token: ">{token.name}</div>
      <div className="col col-2 text-center " data-label="Symbol: ">{token.symbol}</div>
      <div className={`col col-3 text-center ${token.price_change_24h>0 ? "token-price-up" : "token-price-down"}`} data-label="Price: ">{formatter.format(token.current_price)}</div>
      <div className={`col col-4 text-center ${token.market_cap_change_24h>0 ? "token-price-up" : "token-price-down"}`} data-label="Market Cap: ">{currencyFormat(token.market_cap)}</div>

    </li>
       ))}
  </ul>
</div>
    </>
  )
}
