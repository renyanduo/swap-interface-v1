import { ChainId } from '@paiswaptest/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET_CHILD_0]: '0x1B274D556C0c2A4C9B234435c547B67daE88f409', // TODO
  [ChainId.TESTNET_CHILD_0]: '0xbc2cDA5D9aa17DC73b2EFB4E13448aC2E23f9005'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
