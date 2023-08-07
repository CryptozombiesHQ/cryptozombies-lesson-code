pragma solidity ^0.4.25;

contract ZombieFactory {

    event NewZombie(uint zombieId, string name, uint dna);

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    mapping (uint => address) public zombieToOwner;
    mapping (address => uint) ownerZombieCount;

    function _createZombie(string _name, uint _dna) private {
        uint id = zombies.push(Zombie(_name, _dna)) - 1;
        zombieToOwner[id] = msg.sender;
        ownerZombieCount[msg.sender]++;
        emit NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % dnaModulus;
    }

   function createRandomZombie(string memory _name) public {
    require(ownerZombieCount[msg.sender] == 0);
    uint randDna = _generateRandomDna(_name);

    // Check if the generated DNA is already used by an existing zombie
    bool isDnaUnique = true;
    for (uint i = 0; i < zombies.length; i++) {
        if (zombies[i].dna == randDna) {
            isDnaUnique = false;
            break;
        }
    }

    if (!isDnaUnique) {
        // Keep generating a new randDna until it is unique
        while (!isDnaUnique) {
            randDna = _generateRandomDna(_name);
            isDnaUnique = true;
            for (uint i = 0; i < zombies.length; i++) {
                if (zombies[i].dna == randDna) {
                    isDnaUnique = false;
                    break;
                }
            }
        }
    } else {
        // The initial randDna is already unique, no need to re-generate
    }

    randDna = randDna - randDna % 100;
    _createZombie(_name, randDna);
}


    randDna = randDna - randDna % 100;
    _createZombie(_name, randDna);
}


}
contract ZombieFeeding is ZombieFactory {
}
