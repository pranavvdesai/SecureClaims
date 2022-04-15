const Transactions = artifacts.require("Transactions");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Transactions);

  const transactions = await Transactions.deployed();

  console.log("Transactions contract address: " + transactions.address);
  
  // get balance of accounts[0]
  const balance = await transactions.getBalance(accounts[1]);
  console.log("Balance of accounts[1]: " + balance);
};
 