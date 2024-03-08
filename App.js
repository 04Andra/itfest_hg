import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Landing from "./screens/auth/Landing";
import Shop from "./screens/app/Shop";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TabNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: '8%',
                backgroundColor: "#45D33D"
            },
            headerStyle: {
                backgroundColor: "#45D33D",
            }
        }}>
            <Tab.Screen name={"Shop"} component={Shop} options={{
                tabBarIcon: ({focused}) =>
                    <Ionicons name={"cart"} size={28} color={focused ? "#45D33D" : 'gray'}/>,
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: '#FFF969',
                headerShown: false,
            }}
            />
            <Tab.Screen name={"Profile"} component={Profile} options={{
                tabBarIcon: ({focused}) =>
                    <Ionicons name={"person"} size={28} color={focused ? "#45D33D" : 'gray'}/>,
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: '#FFF969'
            }}/>
        </Tab.Navigator>
            )}

            const StackNav = () => {
            return(
            <Stack.Navigator>
                <Stack.Screen name={"Landing"} component={Landing} options={{headerShown:false}}/>
            <Stack.Screen name={"Login"} component={Login} options={{headerShown: false}}/>
    <Stack.Screen name={"Register"} component={Register} options={{headerShown: false}}/>
    <Stack.Screen name={"TabNav"} component={TabNav} options={{headerShown: false}}/>
</Stack.Navigator>
)
}
export default function App() {
    return (
            <NavigationContainer>
                <StackNav/>
            </NavigationContainer>
    );
}

