import {View, Text, StyleSheet} from "react-native";

function Login() {
    return(
        <View style={loginStyles.container}>
            <Text style={loginStyles.textLogin}>Login page</Text>
        </View>
    )
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin: {
        fontSize: 22,
        color: 'red'
    }
});

export default Login;