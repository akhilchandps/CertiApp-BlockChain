require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",

  networks:{

    locahost:{
      url:"http://127.0.0.1:8545/"
    },
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`,
      accounts:[process.env.PRIVATE_KEY]
      // accounts:"ea7fe079bf49ed40f23d6e4a7289aa6afbed41dd83fc52dc4d2eaea8679f349a"
     }
  }
};
