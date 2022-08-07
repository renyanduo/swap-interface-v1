import { ChainId } from '@paiswaptemp/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET_CHILD_0]: '0x1B274D556C0c2A4C9B234435c547B67daE88f409', // TODO
  [ChainId.TESTNET_CHILD_0]: '0x83e404923c11b51c1cd1154f76ef9fe51dc69d0c'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
