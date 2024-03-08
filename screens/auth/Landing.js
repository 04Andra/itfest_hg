import {View, Text, StyleSheet, ImageBackground, Image} from "react-native";
import KSpacer from "../../components/KSpacer";

function Landing() {

    const backgroundImage = require('C:\\Users\\Acer\\Desktop\\ITFest\\itfest_hg\\assets\\photos\\wallpaperGreen.png');
    const basketImage = require('C:\\Users\\Acer\\Desktop\\ITFest\\itfest_hg\\assets\\photos\\basket.png');
    const producerImage = require('C:\\Users\\Acer\\Desktop\\ITFest\\itfest_hg\\assets\\photos\\producer.png');

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

                </View>

                <View style={landingStyles.containerButton}>

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
    }
});

export default Landing;