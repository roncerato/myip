import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IGlobalConnection, ILocalConnection } from "../../types/connectionTypes";

type Navigation =  {navigation: NativeStackNavigationProp<HomeStack, "HomeScreen">;}

type LocalScreen = ILocalConnection & Navigation
type GlobalScreen = IGlobalConnection & Navigation

export type NetFullDataCardProps = LocalScreen | GlobalScreen
