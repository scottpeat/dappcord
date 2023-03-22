const hre = require('hardhat');

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether');
};

async function main() {
  // Set up accounts & variables
  const [deployer] = await ethers.getSigners();
  const NAME = 'Dappcord';
  const SYMBOL = 'DC';

  // Deploy contract
  const Dappcord = await ethers.getContractFactory('Dappcord');
  const dappcord = await Dappcord.deploy(NAME, SYMBOL);
  await dappcord.deployed();

  console.log(`Deployed Dappcord Contract at: ${dappcord.address}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
