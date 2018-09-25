const Deploy = require("../utils/Deploy");
const Keys = require("../keys");
const Crowdsale = artifacts.require("./Crowdsale.sol");

const start = async (deployer, network, accounts) => {
  if (network === "develop") return;

  const keys = Keys(network);
  const deploy = Deploy(deployer, network);
  const contracts = require(`../build/addresses-${network}.json`);
  const [owner] = accounts;

  const purposeWeiRate = 6; // ~100$ of ether (24/12/17)
  const etherWeiRate = 1; // 6/1

  // --> crowdsale
  const crowdsale = await deploy(
    Crowdsale,
    keys.wallet,
    keys.athene,
    contracts.Purpose,
    purposeWeiRate,
    etherWeiRate
  );
  console.log("Transfering ownership to the Wallet address...");
  await crowdsale.transferOwnership(keys.wallet, {
      from: owner
    })
    .then(console.log)
    .catch(console.log);
};

module.exports = start;