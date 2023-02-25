import { useContractRead } from "wagmi";
import { insureLabSetup } from "../constants/interactionSetup";


export const GetCalculatedCover = (riskLevel, coverPeriod, coverAmount) => {
    const { data } = useContractRead({
        ...insureLabSetup,
        functionName: "calculateCover",
        args: [
            riskLevel,
            coverPeriod,
            coverAmount
        ]
    });

    return { data };
}
