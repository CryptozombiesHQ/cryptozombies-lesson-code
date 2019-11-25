pragma solidity ^0.4.25;
import "./zombiehelper.sol";
contract ZombieAttack is ZombieHelper {
  uint randNonce = 0;

  function randMod(uint _modulus) internal returns(uint) {
    randNonce++;
    return uint(keccak256(abi.encodePacked(now, msg.sender, randNonce))) % _modulus;
  }
}
