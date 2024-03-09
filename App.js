import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Landing from "./screens/auth/Landing";
import Shop from "./screens/app/Shop";
import Profile from "./screens/app/Profile";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Vegetables from "./screens/app/Vegetables";
import Fruits from "./screens/app/Fruits";
import Dairy from "./screens/app/Dairy";
import {useState} from "react";
import {MyContext} from "./assets/context/MyContext";

import Details from "./screens/app/Details";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const TabNav = () => {

    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: '10%',
                backgroundColor: "#F1F5A8",
                borderRadius:10,
               /* borderTopLeftRadius:20,
                borderTopRightRadius:20,*/
                shadowOffset:0.2
            },
            headerStyle: {
                backgroundColor: "#45D33D",
            }
        }}>
            <Tab.Screen name={"Shop"} component={Shop} options={{
                tabBarIcon: ({focused}) =>

                    <Entypo name={"shopping-cart"} size={focused ? 32 : 26} color={focused ? "#A5DD9B" : 'gray'}/>,
                tabBarInactiveTintColor: '#F1F5A8',
                tabBarActiveTintColor: '#F1F5A8',
                headerShown: false,

            }}
            />
            <Tab.Screen name={"Profile"} component={Profile} options={{
                tabBarIcon: ({focused}) =>
                    <FontAwesome name={"user"}  size={focused ? 32 : 26} color={focused ? "#A5DD9B" : 'gray'}/>,
                tabBarInactiveTintColor: '#F1F5A8',
                tabBarActiveTintColor: '#F1F5A8'

            }}/>
        </Tab.Navigator>
    )
}

const StackNav = () => {

    const [authProducerContext, setAuthProducerContext] = useState(false);
    const [authCustomerContext, setAuthCustomerContext] = useState(true);
    const [productCardBig, setProductCardBig] = useState([]);
    const [productCardSmall, setProductCardSmall] = useState([]);

    return (
        <MyContext.Provider value={{
            authProducerContext, setAuthProducerContext,
            authCustomerContext, setAuthCustomerContext,
            productCardBig, setProductCardBig,
            productCardSmall, setProductCardSmall
        }}>
        <Stack.Navigator>
            <Stack.Screen name={"Landing"} component={Landing} options={{headerShown: false}}/>
            <Stack.Screen name={"Login"} component={Login} options={{headerShown: false}}/>
            <Stack.Screen name={"Register"} component={Register} options={{headerShown: false}}/>
            <Stack.Screen name={"TabNav"} component={TabNav} options={{headerShown: false}}/>
            <Stack.Screen name={"Vegetables"} component={Vegetables} options={{headerShown: false}}/>
            <Stack.Screen name={"Fruits"} component={Fruits} options={{headerShown: false}}/>
            <Stack.Screen name={"Dairy"} component={Dairy} options={{headerShown: false}}/>
            <Stack.Screen name={"Details"} component={Details} options={{headerShown:false}}/>
        </Stack.Navigator>
        </MyContext.Provider>
    )
}
export default function App() {
    return (
        <NavigationContainer>
            <StackNav/>
        </NavigationContainer>
    );
}

