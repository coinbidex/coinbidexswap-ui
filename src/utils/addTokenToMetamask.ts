import { Token } from 'uniswap-bsc-sdk'

export async function addTokenToMetamask(ethereum: any, token: Token) {
  const IMAGE_URL = 'https://farms.pandaswap.xyz/pnda.png'
  try {
    await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: token.address,
          symbol: token.symbol ? token.symbol : '',
          decimals: token.decimals,
          image: IMAGE_URL
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
}
