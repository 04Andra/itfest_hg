import {View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity} from "react-native";
import {useState} from "react";
import KButton from "../../components/KButton";
import {useNavigation} from "@react-navigation/native";

function Login({navigation}) {

    const backgroundImage = require('../../assets/photos/wallpaperGreen.png');
    const basketImage = require('../../assets/photos/basket.png');

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isLogged, setIsLogged] = useState(true)
    const navigator = useNavigation()

    return (
        <View style={loginStyles.container1}>

            <ImageBackground
                style={loginStyles.backgroundImage}
                source={backgroundImage}
                resizeMode="cover"
            >

                <View style={loginStyles.containerHeader}>

                    <Image
                        style={loginStyles.basketImage}
                        source={basketImage}
                    />

                    <Text style={loginStyles.textBolt}>
                        Start your local shopping
                    </Text>

                </View>

                <View style={loginStyles.container2}>

                    <TextInput
                        style={loginStyles.userInput}
                        onChangeText={setEmail}
                        value={email}
                        placeholder={'Email'}
                    />

                    <TextInput
                        style={loginStyles.userInput}
                        onChangeText={setPhone}
                        value={phone}
                        placeholder={'Telephone'}
                    />

                </View>

                <View style={loginStyles.container3}>

                    <TouchableOpacity onPress={() => {
                        if(email !== '' && phone !==''){
                            setIsLogged(false)
                            navigator.navigate('TabNav')
                        }
                        else{
                            alert('You must complete the fields!')
                        }
                    }}
                                      disabled={!isLogged}
                                      style={{backgroundColor: "#45D33D", borderRadius:10, padding:18, width:'60%',alignItems:'center', shadowOpacity:0.1}}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Log in</Text>
                    </TouchableOpacity>

                    <View style={loginStyles.signInStyle}>

                        <Text style={loginStyles.textLight}>
                            Do not  have an account?
                        </Text>

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Register')}
                        >

                            <Text style={loginStyles.textUndeline}> Register </Text>

                        </TouchableOpacity>

                    </View>

                </View>

            </ImageBackground>


        </View>
    )
}

const loginStyles = StyleSheet.create({
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
        flex: 1.5,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    basketImage: {
        width: '35%',
        height: '45%'
    },
    textBolt: {
        fontSize: 24,
        fontWeight: 'bold'
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
        height: '30%',
        width: '80%',
        borderWidth: 1,
        fontSize: 18,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    textLight: {
        fontSize: 18,
        textAlign: 'center'
    },
    signInStyle: {
        flexDirection: 'row'
    },
    textUndeline: {
        textDecorationLine: 'underline',
        fontSize: 18,
    }
});

export default Login;