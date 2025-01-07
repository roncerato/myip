import { Animated, StyleSheet, TouchableOpacity, View, TouchableWithoutFeedback, Switch } from "react-native";
import { IThemeSwitcher } from "./ThemeSwitcher.props";
import { themeSwitcherStyles } from "./ThemeSwitcher.styles";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";

export default function ThemeSwitcher({ }: IThemeSwitcher) {
    const [isOn, setIsOn] = useState(false);
    const [animatedValue] = useState(new Animated.Value(0));
    const { colors } = useTheme();

    const toggleSwitch = () => {
        setIsOn(!isOn);
        Animated.timing(animatedValue, {
            toValue: isOn ? 0 : 1,
            duration: 160,
            useNativeDriver: false,
        }).start();
    };

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 20],
    });
    return (
        <View>
            <TouchableWithoutFeedback onPress={toggleSwitch} >
                <View style={[styles.switch, { backgroundColor: isOn ? colors.primary : colors.secondText }]}>
                    <Animated.View
                        style={[
                            styles.circle,
                            {
                                transform: [{ translateX }],
                                backgroundColor: "#fff"
                            },
                        ]}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    switch: {
        width: 42,
        height: 20,
        borderRadius: 15,
        backgroundColor: 'grey',
        justifyContent: 'center',
        padding: 4,
    },
    circle: {
        width: 14,
        height: 14,
        borderRadius: 10,
    },
});