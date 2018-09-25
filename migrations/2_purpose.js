const Deploy = require("../utils/Deploy");
const Keys = require("../keys");
const Purpose = artifacts.require("./Purpose.sol");

const start = async (deployer, network, accounts) => {
  if (network === "develop") return;
  const keys = Keys(network);
  const deploy = Deploy(deployer, network);
  const [owner] = accounts;

  const contracts = require(`../build/addresses-${network}.json`);

  // --> deploy purpose
  const purpose = await deploy(Purpose);
};

module.exports = start;