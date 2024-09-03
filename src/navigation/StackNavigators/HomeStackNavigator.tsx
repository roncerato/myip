import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../../screens/HomeScreen";
import DetailsInfoScreen from "../../screens/DetailsInfoScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return (
        <Stack.Navigator
        
        screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="DetailsInfoScreen" component={DetailsInfoScreen}/>
        </Stack.Navigator>
    )
}