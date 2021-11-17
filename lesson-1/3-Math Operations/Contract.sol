pragma solidity ^0.4.25;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

}

/*
- Addition: `x + y`
- Subtraction: `x - y`,
- Multiplication: `x * y`
- Division: `x / y`
- Modulus / remainder: `x % y` *(for example, `13 % 5` is `3`, because if you divide 5 into 13, 3 is the remainder)*

Solidity also supports an ***exponential operator*** (i.e. "x to the power of y", x^y):

```
uint x = 5 ** 2;// equal to 5^2 = 25
```
*/ 