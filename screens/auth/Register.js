import {View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity} from "react-native";
import {useState} from "react";
import KButton from "../../components/KButton";

function Register({navigation}) {

    const backgroundImage = require('../../assets/photos/wallpaperGreen.png');
    const basketImage = require('../../assets/photos/basket.png');

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    return (
        <View style={registerStyles.container1}>

            <ImageBackground
                style={registerStyles.backgroundImage}
                source={backgroundImage}
                resizeMode="cover"
            >

                <View style={registerStyles.containerHeader}>

                    <Image
                        style={registerStyles.basketImage}
                        source={basketImage}
                    />

                    <Text style={registerStyles.textBolt}>
                        Welcome back to your{'\n'}favourite market
                    </Text>

                </View>

                <View style={registerStyles.container2}>

                    <TextInput
                        style={registerStyles.userInput}
                        onChangeText={setEmail}
                        value={email}
                        placeholder={'Email'}
                    />

                    <TextInput
                        style={registerStyles.userInput}
                        onChangeText={setPhone}
                        value={phone}
                        placeholder={'Telephone'}
                    />

                </View>

                <View style={registerStyles.container3}>

                    <KButton
                        route={'TabNav'}
                        color={'#45D33D'}
                        title={'Sign In'}
                    />

                    <View style={registerStyles.signInStyle}>

                        <Text style={registerStyles.textLight}>
                            Do not have an account?
                        </Text>

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Login')}
                        >

                            <Text style={registerStyles.textUndeline}> Sign Up </Text>

                        </TouchableOpacity>

                    </View>

                </View>

            </ImageBackground>


        </View>
    )
}

const registerStyles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    containerHeader: {
        flex: 1.8,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    basketImage: {
        width: '30%',
        height: '40%'
    },
    textBolt: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container2: {
        flex: 1,
        backgroundColor: '#45D33D',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
        borderRadius: 10,
        margin: 40
    },
    container3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25
    },
    userInput: {
        height: '25%',
        width: '80%',
        borderWidth: 1,
        fontSize: 18,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    textLight: {
        fontSize: 20,
        textAlign: 'center'
    },
    signInStyle: {
        flexDirection: 'row'
    },
    textUndeline: {
        textDecorationLine: 'underline',
        fontSize: 20,
    }
});

export default Register;