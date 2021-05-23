import { gql } from "@apollo/client";

export const SMUDGE_TOKEN_DATA = gql`{
    tokenDayDatas(first:2,orderBy: date, orderDirection: desc
     where: {
       token: "0x3dae074a5b125b9847e41b5ee20ac86d92ab77b1"
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
