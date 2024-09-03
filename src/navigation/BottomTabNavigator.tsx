import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from "./StackNavigators/HomeStackNavigator"
import SettingsStack from "./StackNavigators/SettingsStackNavigator"
import { theme } from "../constants/rootStyles"
import InfoIcon from "../../assets/images/svg/info.svg"
import InfoOutlineIcon from "../../assets/images/svg/info-outline.svg"
import SettingsIcon from "../../assets/images/svg/settings.svg"
import SettingsOutlineIcon from "../../assets/images/svg/settings-outline.svg"
const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.dark.secondary,
                    borderTopWidth: 0,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let IconComponent;
                    const iconSize = 22
                    if (route.name === "Home") {
                        IconComponent = focused ?
                            <InfoIcon fill={color} width={iconSize} height={iconSize} /> :
                            <InfoOutlineIcon fill={color} width={iconSize} height={iconSize} />
                    }
                    else if (route.name === "Settings") {
                        IconComponent = focused ?
                            <SettingsIcon fill={color} width={iconSize} height={iconSize} /> :
                            <SettingsOutlineIcon fill={color} width={iconSize} height={iconSize} />
                    }
                    return IconComponent
                },
                tabBarActiveTintColor: theme.dark.primaryColor,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: false,
            })}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
            />
            <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
    )
}