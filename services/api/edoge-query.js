import { gql } from "@apollo/client";

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
