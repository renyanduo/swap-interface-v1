# swap-interface-v1

## 安装

克隆仓库

```bash
git clone git@github.com:paiswap-io/swap-interface-v1.git
```

跳转到代码目录

```bash
cd swap-interface-v1
```

安装依赖

```bash
yarn
```

启动

```bash
yarn start
```

## 项目结构和功能

- `Swap` Swap 功能
- `Pool` 流动性列表
- `AddLiquidity` 添加流动性
- `RemoveLiquidity` 移除流动性

## 各项配置位置

### router address

- `src/constants/index.ts`

### PNFT 合约地址

- `src/constants/token/pancakeswap.json`
- `src/util/pool/config.json`

### Factory 合约地址、WETH 合约地址、initCode

- `patches/@paiswap+sdk+1.0.2.patch` 或在 sdk 中修改，生产环境可重新发布 sdk 包

### 增加币种

- `src/constants/token/pancakeswap.json` 在 tokens 数组中添加

```js
// example
"tokens": [
    {
      "name": "PNFT Token",
      "symbol": "PNFT",
      "address": "0xD046766524c66B0b2a53B2A0c92b18B9593C7951",
      "chainId": 10067275,
      "decimals": 18,
      "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xD046766524c66B0b2a53B2A0c92b18B9593C7951.png"
    }
]
```
