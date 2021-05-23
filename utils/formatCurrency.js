export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 10
  })

 export function currencyFormat(num, fixed) {
    return '$' + num.toFixed(fixed ||2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 };
