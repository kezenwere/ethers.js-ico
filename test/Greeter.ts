import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {

  let greeter: any, owner: any, addr1, addr2;

  beforeEach(async() => {
    const Greeter = await ethers.getContractFactory('Greeter');
    greeter = await Greeter.deploy("Hello, world!");
    [owner, addr1, addr2,] = await ethers.getSigners();
  })

  describe("Operations", function() {
    it("Should return the new greeting once it's changed", async function() {
      await greeter.deployed();
      expect(await greeter.greet()).to.equal("Hello, world!");
  
      await greeter.setGreeting("Hola, mundo!");
      expect(await greeter.greet()).to.equal("Hola, mundo!");
    });
  });
});
