import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function RootNavigation(){

    return (<Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="App" component={BottomTabNavigator}/>
    </Stack.Navigator>)

}