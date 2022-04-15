// pragma solidity >=0.4.21 <8.10.0;

// import "./IAddressResolver.sol";
// import "./ISynthetix.sol";

// contract SynthetixStake {

//     IAddressResolver public synthetixResolver;

//     constructor(IAddressResolver _snxResolver) public {
//         synthetixResolver = _snxResolver;
//     }

//     function synthetixIssue() external {
//         ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");
//         require(
//             synthetix != address(0),
//             "Synthetix is missing from Synthetix resolver"
//         );

//         synthetix.issueMaxSynths();
//     }

//     function synthetixIssueOnBehalf(address user) external {
//         ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");
//         require(
//             synthetix != address(0),
//             "Synthetix is missing from Synthetix resolver"
//         );

//         synthetix.issueMaxSynthsOnBehalf(user);
//     }
// }
