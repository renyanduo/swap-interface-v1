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
- `Swap` Swap功能
- `Pool` 流动性列表
- `AddLiquidity` 添加流动性
- `RemoveLiquidity` 移除流动性

## 各地址配置位置
### router address
- `src/constants/index.ts`

### PNFT合约地址
- `src/constants/token/pancakeswap.json`
- `src/util/pool/config.json`

### Factory合约地址、WETH合约地址、initCode
- `patches/@paiswap+sdk+1.0.2.patch` 或在sdk中修改，生产环境可重新发布sdk包