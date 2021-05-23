import { useQuery } from '@apollo/client'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { EDOGE_TOKEN_DATA } from '../../services/api/edoge-query'
import { SMUDGE_TOKEN_DATA } from '../../services/api/smudge-query'
import { currencyFormat, formatter } from '../../utils/formatCurrency'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareUp } from '@fortawesome/free-solid-svg-icons'

const smudge =
  'https://carbonswap.exchange/#/swap?inputCurrency=0x3dae074a5b125b9847e41b5ee20ac86d92ab77b1'

const getCarbonswapMemesData = (smudge, supply, imgURl) => {
  return {
    id:"smudge--id",
    current_price: Number(smudge[0]?.priceUSD),
    total_supply: supply,
    price_change_24h: Number(smudge[0]?.priceUSD) - Number(smudge[1]?.priceUSD),
    market_cap:  supply* Number(smudge[0]?.priceUSD),
    image: imgURl,
    name:smudge[0]?.token.name,
    symbol:smudge[0]?.token.symbol,
    total_volume:23142343,
  }
}

export default function CryptoList({ tokens }) {
const {data,loading,error} = useQuery(SMUDGE_TOKEN_DATA)
  let _tokens = []
  let smudge

  if (loading) {
    return (
      <>
        {/* <div className="container"> */}
          <div className="loading">
            <div className="loader"></div>
          </div>
        {/* </div> */}
      </>
    )
  }

  if (error) {
    console.error(error)
    return null
  }

  if (data) {
    _tokens = [getCarbonswapMemesData(data.tokenDayDatas,100000,'/smudge.jpg'),...tokens]
    console.log(_tokens);
  }

  return (
    <>
      <div className="table-users">
        <table cellSpacing="0">
          <caption>Memes Token Analytics</caption>
          <thead>
            <tr>
              <th width="100">token</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price $USD</th>
              <th>Market Cap</th>
              <th>Total Volume</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr key="Token_sumdge">
              <td>
                {' '}
                <Image
                  src="/smudge.jpg"
                  alt="Smugde Token"
                  width={150}
                  height={100}
                />
              </td>
              <td>{smudge[0]?.token.name}</td>
              <td>{smudge[0]?.token.symbol}</td>
              <td>{formatter.format(Number(smudge[0]?.priceUSD) * 100000 )}</td>
              <td>{currencyFormat(Number(smudge[0]?.totalLiquidityUSD))}</td>
              <td>
              <td>{currencyFormat(Number(smudge[0]?.dailyVolumeToken))}</td> */}
                {/* <FontAwesomeIcon icon={faCaretSquareUp}></FontAwesomeIcon> */}
              {/* </td>
            </tr> */}

            {_tokens.map((token) => (
              <tr key={token.id}>
                <td>
                  <img src={token.image} alt="" />
                </td>
                <td>{token.name}</td>
                <td>{token.symbol}</td>
                <td>{formatter.format(token.current_price)}</td>
                <td>{currencyFormat(token.market_cap)}</td>
                <td>{currencyFormat(token.total_volume)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
