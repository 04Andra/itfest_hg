import {View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity} from "react-native";
import {useState} from "react";
import KButton from "../../components/KButton";
import {useNavigation} from "@react-navigation/native";

function Register({navigation}) {

    const backgroundImage = require('../../assets/photos/wallpaper.png');
    const basketImage = require('../../assets/photos/basket.png');

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isRegi, setIsRegi] = useState(true)
    const navigator = useNavigation()
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
                        keyboardType={"number-pad"}
                        placeholder={'Telephone'}
                    />

                </View>

                <View style={registerStyles.container3}>

                    <TouchableOpacity onPress={() => {
                        if(email !== '' && phone !==''){
                            setIsRegi(false)
                            navigator.navigate('TabNav')
                        }
                        else{
                            alert('You must complete the fields!')
                        }
                    }}
                                      disabled={!isRegi}
                                      style={{backgroundColor: "#A5DD9B", borderRadius:10, padding:18, width:'60%',alignItems:'center', shadowOpacity:0.1}}>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'#31363F'}}>Register</Text>
                    </TouchableOpacity>

                    <View style={registerStyles.signInStyle}>

                        <Text style={registerStyles.textLight}>
                            Already have an account?
                        </Text>

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Login')}
                        >

                            <Text style={registerStyles.textUndeline}> Login </Text>

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
        backgroundColor: '#A5DD9B',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
        borderRadius: 10,
        margin: 30,
    },
    container3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25
    },
    userInput: {
        height: '30%',
        width: '90%',
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

export default Register;