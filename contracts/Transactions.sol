// // SPDX-License-Identifier: GPL-3.0

// pragma solidity ^0.8.12;

// contract faucet {
//     address public me;

//     struct requester {
//         address requesteraddress;
//         uint256 amount;
//     }

//     requester[] public requesters;

//     constructor() public payable {
//         me = msg.sender;
//     }

//     event sent(uint256 _amountsent);
//     event received();

//     function receive() public payable {
//         emit received();
//     }

//     function send(address payable _requester, uint256 _request) public payable {
//         uint256 amountsent = 0;
//         _request = _request * 1e18;

//         if (address(this).balance > _request) {
//             amountsent = _request / 1e18;
//             _requester.transfer(_request);
//         } else {
//             amountsent = (address(this).balance) / 1e18;
//             _requester.transfer(address(this).balance);
//         }

//         requester memory r;
//         r.requesteraddress = _requester;
//         r.amount = amountsent;
//         requesters.push(r);
//         emit sent(amountsent);
//     }
// }
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract Transactions {
    address public sender;
    mapping(address => uint256) public balances;

    event Sent(address from, address to, uint256 amount);

    constructor() public {
        sender = msg.sender;
    }

    function stake(address receiver, uint256 amount) public payable {
        require(amount < 1e60);
        balances[receiver] += amount;
    }
}
