import insureLabAbi from "../abi/insureAbi.json";
import governanceAbi from "../abi/governanceAbi.json";
import ERC20 from "../abi/ERC20Abi.json";




// Deployed Contract Addresses

export const mUSDT = "0xE8377ef90628B7f03b440bd2c18956fDAFA355D9"

export const insureLabContract = "0x8045D17C25568f8Ea1cCa286d88926bB2A957b99"

export const governanceContract = "0x8D42F48d6b83E202A50D77f690d8C886C201D689"


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