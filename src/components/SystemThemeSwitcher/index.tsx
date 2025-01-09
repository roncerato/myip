import { Animated, StyleSheet, TouchableOpacity, View, TouchableWithoutFeedback, Switch } from "react-native";
import { ISystemThemeSwitcher } from "./SystemThemeSwitcher.props";
import { systemThemeSwitcherStyles } from "./SystemThemeSwitcher.styles";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";

export default function SystemThemeSwitcher({ }: ISystemThemeSwitcher) {
    const { isDarkTheme, setIsDarkTheme, isAutoTheme, setIsAutoTheme, systemTheme } = useThemeContext()
    const [animatedValue] = useState(new Animated.Value(Number(isAutoTheme)));
    const { colors } = useTheme();

    const toggleSwitch = () => {
        setIsAutoTheme(!isAutoTheme);
        Animated.timing(animatedValue, {
            toValue: isAutoTheme ? 0 : 1,
            duration: 160,
            useNativeDriver: false,
        }).start();
    }

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 20],
    });
    return (
        <View>
            <TouchableWithoutFeedback onPress={toggleSwitch} >
                <View style={[systemThemeSwitcherStyles.switch, { backgroundColor: isAutoTheme ? colors.primary : colors.secondText }]}>
                    <Animated.View
                        style={[
                            systemThemeSwitcherStyles.circle,
                            {
                                transform: [{ translateX }],
                            },
                        ]}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
