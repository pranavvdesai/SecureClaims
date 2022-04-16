const Transactions = artifacts.require("Transactions");
const Stake = artifacts.require("Stake");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Transactions);
  await deployer.deploy(Stake);

  const transactions = await Transactions.deployed();

  const stake = await Stake.deployed();

  console.log("Transactions contract address: " + transactions.address);
  console.log("Stake contract address: " + stake.address);
  
  // get balance of accounts[0]
  const balance = await transactions.getBalance(accounts[1]);
  console.log("Balance of accounts[1]: " + balance);
};