import { View } from "react-native";
import { NetworkDataStyles } from "./NetworkData.style";
import Button from "../Button";
import { INetworkData } from "./NetworkData.props";
import IPInfo from "../IPInfo";

export default function NetworkData({ local, global, flag }: INetworkData) {
    return (
        <View style={NetworkDataStyles.container}>
            <View style={NetworkDataStyles.data}>
                <IPInfo isLocal={false} data={global} flag={flag}/>
                <IPInfo isLocal={true} data={local}/>
            </View>
            <Button text={"ОБНОВИТЬ"} onPress={() => { console.log("hello") }} />
        </View>
    )
}