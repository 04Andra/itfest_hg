import {View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from "react-native";
import KSpacer from "../../components/KSpacer";
import KButton from "../../components/KButton";
import KAuthChooseProducer from "../../components/KAuthChooseProducer";
import KAuthChooseCustomer from "../../components/KAuthChooseCustomer";
import {useContext} from "react";
import {MyContext} from "../../assets/context/MyContext";

function Landing({navigation}) {

    const backgroundImage = require('../../assets/photos/wallpaperGreen.png');
    const basketImage = require('../../assets/photos/basket.png');

    const {authProducerContext, setAuthProducerContext} = useContext(MyContext);
    const {authCustomerContext, setAuthCustomerContext} = useContext(MyContext);

    const contextFunction = () => {
        if (authProducerContext === true) {
            setAuthCustomerContext(false)
        } else if (authCustomerContext === true) {
            setAuthProducerContext(false)
        }
    }

    return (
        <View style={landingStyles.container1}>

            <ImageBackground
                style={landingStyles.backgroundImage}
                source={backgroundImage}
                resizeMode="cover"
            >

                <View style={landingStyles.containerImage}>

                    <Image
                        style={landingStyles.basketImage}
                        source={basketImage}
                    />

                </View>

                <View style={landingStyles.containerText}>

                    <Text style={landingStyles.textBolt}>
                        Let’s start your journey
                    </Text>

                    <KSpacer h={20}/>

                    <Text style={landingStyles.textLight}>
                        Your local farmer’s market with{'\n'}natural and local products
                    </Text>

                </View>

                <View style={landingStyles.containerAuth}>

                    <KAuthChooseProducer text={'I’m a local producer'}
                                         photo={require('../../assets/photos/producer.png')}/>

                    <KAuthChooseCustomer text={'I’m a customer'}
                                         photo={require('../../assets/photos/customer.png')}/>

                </View>

                <View style={landingStyles.containerButton}>

                    <TouchableOpacity style={landingStyles.buttonStyle}
                                      onPress={() => {
                                          if (authProducerContext === false) {
                                              alert('Updateing...')
                                          } else if (authCustomerContext === false) {
                                              navigation.navigate('Login')
                                          }
                                      }}
                    >
                        <Text style={landingStyles.textButtonStyle}>
                            Next
                        </Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </View>
    )
}

const landingStyles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    containerImage: {
        flex: 1.5,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerAuth: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    containerButton: {
        flex: 1,
        justifyContent: 'center',
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
    textLight: {
        fontSize: 20,
        textAlign: 'center'
    },
    textButtonStyle: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600'
    },
    buttonStyle: {
        backgroundColor: '#45D33D',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        width: '50%'
    }
});

export default Landing;