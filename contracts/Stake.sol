pragma solidity >=0.4.21 <8.10.0;

import "./Interfaces/IAddressResolver.sol";
import "./Interfaces/ISynthetix.sol";

contract Stake {
    IAddressResolver public synthetixResolver;

    constructor() public {
        synthetixResolver = IAddressResolver(
            0x567357D7803161C1eD782e9395735621B7954dDE
        );
    }

    function synthetixIssue() external {
        ISynthetix synthetix = ISynthetix(
            synthetixResolver.getAddress("Synthetix")
        );
        synthetix.issueMaxSynths();
    }

    function synthetixIssueOnBehalf(address user) external {
        ISynthetix synthetix = ISynthetix(
            synthetixResolver.getAddress("Synthetix")
        );
        synthetix.issueMaxSynthsOnBehalf(user);
    }
}
