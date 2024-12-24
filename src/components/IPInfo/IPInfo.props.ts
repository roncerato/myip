import { NetInfoState } from "@react-native-community/netinfo"
import { SvgProps } from "react-native-svg"
import { IGlobalIP } from "../../types/globalIP"


export interface ILocalInterface{
    isLocal: true
    data: NetInfoState | undefined
    flag?: undefined
    
}
export interface IGlobalInterface{
    isLocal: false
    data: IGlobalIP | undefined
    flag: {uri: string} | undefined
}