async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account:", deployer.address);

    const MyToken = await ethers.getContractFactory("MyToken");
    const initialSupply = ethers.utils.parseUnits('1000', 18); // 1000 tokens with 18 decimals
    const token = await MyToken.deploy(initialSupply);

    console.log("Token contract deployed at:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

