import { ChainId } from '@paiswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET_CHILD_0]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.TESTNET_CHILD_0]: '0x83e404923c11b51c1cd1154f76ef9fe51dc69d0c'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
