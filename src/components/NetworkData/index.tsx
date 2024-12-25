import { View } from "react-native";
import { NetworkDataStyles } from "./NetworkData.style";
import Button from "../Button";
import { INetworkData } from "./NetworkData.props";
import IPInfo from "../IPInfo";
import NetInfo from "@react-native-community/netinfo";
import { useTranslation } from "react-i18next";

export default function NetworkData({ local, global, flag }: INetworkData) {
    const {t} = useTranslation();
    return (
        <View style={NetworkDataStyles.container}>
            <View style={NetworkDataStyles.data}>
                <IPInfo isLocal={false} data={global} flag={flag}/>
                <IPInfo isLocal={true} data={local}/>
            </View>
            <Button text={t("homescreen.refresh")} onPress={() => {NetInfo.refresh() }} disabled={!local?.isInternetReachable} style={{backgroundColor: "red"}} isBGDark={!local?.isInternetReachable}/>
        </View>
    )
}