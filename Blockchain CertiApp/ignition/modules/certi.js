// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("CertiModule", (m) => {
  

  const Certi = m.contract("CertiApp");

  return {Certi};
});
