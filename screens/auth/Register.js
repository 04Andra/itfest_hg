import {View, Text, StyleSheet} from "react-native";

function Register() {
    return(
        <View style={registerStyles.container}>
            <Text style={registerStyles.textLogin}>register page</Text>
        </View>
    )
}

const registerStyles = StyleSheet.create({
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

export default Register;