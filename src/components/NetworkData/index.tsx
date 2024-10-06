import { Text, View } from "react-native";
import InfoBlock from "../InfoBlock";
import { NetworkDataStyles } from "./NetworkData.style";
import Button from "../Button";
import { INetworkData } from "./NetworkData.props";
import IPInfo from "../IPInfo";

export default function NetworkData({ info }: INetworkData) {
    return (
        <View style={NetworkDataStyles.container}>
            <View style={NetworkDataStyles.data}>
                <IPInfo info={info} isLocal={false} />
                <IPInfo info={info} isLocal={true} />
            </View>
            <Button text={"ОБНОВИТЬ"} onPress={() => { console.log("hello") }} />
        </View>
    )
}