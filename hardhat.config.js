/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
};
require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // Pour charger ta clé privée de manière sécurisée

module.exports = {
    solidity: "0.8.24",
    networks: {
        sepolia: {
            url: "https://sepolia-rpc.scroll.io", // URL du Scroll Sepolia Testnet
            accounts: [process.env.PRIVATE_KEY],  // Ta clé privée pour signer les transactions
        },
    },
};
