import { IGlobalIP } from "../../types/globalIP";

export interface IGlobalInfo{
    data: IGlobalIP | undefined,
    flag: {uri: string} | undefined
}