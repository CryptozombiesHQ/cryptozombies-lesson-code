pragma solidity ^0.4.25;
import "./zombiefeeding.sol";
contract ZombieHelper is ZombieFeeding {

  modifier aboveLevel(uint32 _level, uint _zombieId) {
    require(zombies[_zombieId].level >= _level);
    _;
  }

}
