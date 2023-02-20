import insureLabAbi from "../abi/insureAbi.json";
import governanceAbi from "../abi/governanceAbi.json";
import ERC20 from "../abi/ERC20Abi.json";




// Deployed Contract Addresses

export const mUSDT = "0x18d3BD3f2A9e1af0C2dF26a0f80E3af34abEe4F7"

export const insureLabContract = "0x06bF8c3D4B8fEa715D403693d532f5bF99C47ae3"

export const governanceContract = "0xA87F30B7CD469D65B08bb74f669821259AfD0e7d"


export const insureLabSetup = {
    address: insureLabContract,
    abi: insureLabAbi,
};

export const governanceSetup = {
    address: governanceContract,
    abi: governanceAbi
}


export const erc20Setup = {
    address: mUSDT,
    abi: ERC20
}