import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  // Specify the initial greeting message
  const initialGreeting = "Hello, world!";

  // Get the contract factory and deploy the contract
  const Greeting = await ethers.getContractFactory("Greeting");
  const greetingContract = await Greeting.deploy(initialGreeting);

  // Wait for the contract to be deployed
  await greetingContract.waitForDeployment();

  console.log("Greeting contract deployed at:", greetingContract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
