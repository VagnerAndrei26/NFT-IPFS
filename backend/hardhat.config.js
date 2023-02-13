require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork : "mumbai",
  networks: {
    mumbai:{
      url:process.env.ALCHEMY_KEY,
      accounts:[process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey:{
      polygonMumbai:process.env.POLYGONSCAN_API_KEY
    }
  }
};