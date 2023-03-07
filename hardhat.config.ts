import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

task("hello", "Prints 'Hello, World!'", async () => {
  console.log("Hello, World!");
});

const config: HardhatUserConfig = {
  solidity: "0.8.18",
};

export default config;
