import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IGlobalConnection, ILocalConnection } from "../../types/connectionTypes";

type Navigation =  {navigation: NativeStackNavigationProp<HomeStack, "HomeScreen">;}

type LocalScreen = ILocalConnection & Navigation & {
    flag?: undefined
}
type GlobalScreen = IGlobalConnection & Navigation & {
    flag: {uri: string} | undefined
}

export type NetFullDataCardProps = LocalScreen | GlobalScreen
