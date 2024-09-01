import { Text, View } from "react-native";
import { IConnectionStatusIndicator } from "./ConnectionStatusIndicator.props";
import { connectionIndicatorStyles as styles } from "./ConnectionStatusIndicator.style";
import { useEffect, useState } from "react";

export default function ConnectionStatusIndicator({ type }: IConnectionStatusIndicator) {
    const [indicatorIsGreen, setIndicatorIsGreen] = useState<boolean>(false)
    useEffect(() => {
        async function request() {
            try {
                if (type.key && type.key !== "none") {
                    const response = await fetch('https://www.google.com');
                    setIndicatorIsGreen(response.status === 200);
                }
                else{
                    setIndicatorIsGreen(false)
                }
            }
            catch(error){
                setIndicatorIsGreen(false)
            }
        }
        request()
    }, [type]);
    return (
        <View style={styles.connectionStatusIndicator}>
            <View style={[{ backgroundColor: indicatorIsGreen === true ? "green" : "red"}, styles.connectionStatusIndicatorColor]}></View>
            <Text style={styles.connectionStatusIndicatorText}>
                {indicatorIsGreen ? "ONLINE" : "OFFLINE"}
            </Text>
        </View>
    )
}