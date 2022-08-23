import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import "@nomiclabs/hardhat-waffle";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: 'https://ropsten.infura.io/v3/3e2725b69e5f4fcc961c49e5c680ef24',
      accounts: [`0x${process.env.MT_ACCOUNT_KEY}`]
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/-RfU72s-m55HsMSno44MgtDrdzac3LlN`,
      accounts: [`0x${process.env.GOERLI_ACCOUNT_KEY}`]
    }
  }
};

export default config;
