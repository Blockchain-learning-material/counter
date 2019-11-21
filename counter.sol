pragma solidity ^0.5.0;

contract Counter {
    int count;

    function decrement() public {
        count -= 1;
    }

    function increment() public {
        count += 1;
    }

    function getCount() public view returns (int) {
        return count;
    }
}