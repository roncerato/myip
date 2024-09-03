import { Text, View } from "react-native";
import { IConnectionStatusIndicator } from "./ConnectionStatusIndicator.props";
import { connectionIndicatorStyles as styles } from "./ConnectionStatusIndicator.style";
import { useEffect, useState } from "react";

export default function ConnectionStatusIndicator({ indicator }: IConnectionStatusIndicator) {
    const [indicatorIsGreen, setIndicatorIsGreen] = useState<boolean | null>(indicator)
    useEffect(()=>{
        setIndicatorIsGreen(indicator)
    },[indicator])
    return (
        <View style={styles.connectionStatusIndicator}>
            <View style={[{ backgroundColor: indicatorIsGreen === true ? "green" : "red" }, styles.connectionStatusIndicatorColor]}></View>
            <Text style={styles.connectionStatusIndicatorText}>
                {indicatorIsGreen ? "ONLINE" : "OFFLINE"}
            </Text>
        </View>
    )
}