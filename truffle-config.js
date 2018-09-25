const HDWalletProvider = require("truffle-hdwallet-provider");
const Keys = require("./keys");
const rinkebyKeys = Keys("rinkeby");
const mainnetKeys = Keys("mainnet");
const ganacheKeys = Keys("ganache");

module.exports = {
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },
    rinkeby: {
      provider: new HDWalletProvider(
        rinkebyKeys.mnemonic,
        `https://rinkeby.infura.io/${rinkebyKeys.infuraKey}`
      ),
      network_id: 4,
      gas: "7000000",
      gasPrice: "4000000000",
      skipDryRun: true,
    },
    mainnet: {
      provider: new HDWalletProvider(
        mainnetKeys.mnemonic,
        `https://mainnet.infura.io/${mainnetKeys.infuraKey}`
      ),
      gas: "7800000",
      gasPrice: "20000000000",
      network_id: 1,
      skipDryRun: true,
    },
    ganache: {
      provider: new HDWalletProvider(
        ganacheKeys.mnemonic,
        `127.0.0.1:8545`
      ),
      gas: "7000000",
      gasPrice: "2000000000",
      network_id: "*",
      skipDryRun: true,
    }
  },
  compilers: {
    solc: {
      version: "0.4.18",
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  }
};
