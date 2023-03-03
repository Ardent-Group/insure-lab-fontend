import insureLabAbi from "../abi/insureAbi.json";
import governanceAbi from "../abi/governanceAbi.json";
import ERC20 from "../abi/ERC20Abi.json";




// Deployed Contract Addresses

export const mUSDT = "0x86cDeb91758E251124f7CA152BfDd8a23B70d230"

export const insureLabContract = "0x462C2CAC993D6F11658CD70A92B7C30398E944E6"

export const governanceContract = "0x4EC46c1c3BEaDf4621eB34B56F4b8734f115343F"


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