import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {

  let Greeter, greeter, owner, addr1, addr2;

  beforeEach(async() => {
    Greeter = await ethers.getContractFactory('Greeter');
    greeter = await Greeter.deploy();
    [owner, addr1, addr2,] = await ethers.getSigners();
  })
  
  describe('Deployment', () => {
    it("Should set the right owner", async () => {
      expect (await greeter.owner()).to.equal(owner.address);
    })

    it("Should assign the total supply of tokens to the owner", async () => {
      const ownerBalance = await greeter.balanceOf(owner.address)
      expect(await greeter.totalSupply()).to.equal(ownerBalance)
    })
  })

  describe("Operations", function() {
    it("Should return the new greeting once it's changed", async function() {
      const Greeter = await ethers.getContractFactory("Greeter");
      const greeter = await Greeter.deploy("Hello, world!");
      
      await greeter.deployed();
      expect(await greeter.greet()).to.equal("Hello, world!");
  
      await greeter.setGreeting("Hola, mundo!");
      expect(await greeter.greet()).to.equal("Hola, mundo!");
    });
  });
});
