import { useQuery, gql } from "@apollo/client";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import Image from 'next/image'

  export const EDOGE_TOKEN_DATA = gql`{
     tokenDayDatas(first:3,orderBy: date, orderDirection: desc
      where: {
        token: "0xee6b9f75cc61ca992e74e0ad63e59bb9972fc2ee"
      }
     ) {id
        date
        priceUSD
        totalLiquidityUSD
        dailyVolumeToken
        dailyVolumeUSD
      token{
        name
        symbol
        decimals
      }
     }
    }
  `;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 10
  })
  function currencyFormat(num, fixed) {
    console.log(fixed);
    return '$' + num.toFixed(fixed ||2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 };
export default function CryptoList ({tokens}) {
  const { data, loading, error } = useQuery(EDOGE_TOKEN_DATA);
  let _tokens=[];
  let edoge;
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  if(data){
    _tokens=[...tokens];
   edoge=data.tokenDayDatas[0];
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
      <th >Total Volume</th>
    </tr>
    </thead>
    <tbody>  
    <tr key="Token_idEdoge">
    <td> <Image src="/logo.png" alt="Token Edoge"   width={150} height={100} /></td>
    <td>{edoge?.token.name}</td>
    <td>{edoge?.token.symbol}</td>
    <td>{formatter.format((Number(edoge?.priceUSD)))}</td>
    <td>{currencyFormat(Number(edoge?.totalLiquidityUSD))}</td>
    <td>{currencyFormat(Number(edoge?.dailyVolumeToken))}</td>
   </tr>
      {_tokens.map(token=>(
    <tr key={token.id}>
    <td><img src={token.image} alt="" /></td>
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
  );
}



// export const getStaticProps: GetStaticProps = async () => {
//   const todos = await fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&category=meme-token&="
//   ).then((response) => response.json());

//   return {
//     props: { tokens },
//   };
// };
