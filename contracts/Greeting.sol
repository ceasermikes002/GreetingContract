// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Greeting {
    string public greeting;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    // Set a new greeting message
    function setGreeting(string memory _newGreeting) public {
        greeting = _newGreeting;
    }

    // Get the current greeting message
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
