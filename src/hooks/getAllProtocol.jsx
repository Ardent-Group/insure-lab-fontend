import { useContractRead } from "wagmi";
import { insureLabSetup } from "../constants/interactionSetup";


export const GetProtocol = (id) => {
    const { data } = useContractRead({
        ...insureLabSetup,
        functionName: "getProtocolData",
        args: [id]
    });


    return { data };
}