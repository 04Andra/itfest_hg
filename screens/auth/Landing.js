import {View, Text, StyleSheet, ImageBackground} from "react-native";

function Landing() {

    const backgroundImage = require('C:\\Users\\Acer\\Desktop\\ITFest\\itfest_hg\\assets\\photos\\wallpaperGreen.png');

    return(
        <View style={landingStyles.container1}>

            <ImageBackground
                style={landingStyles.backgroundImage}
                source={backgroundImage}
                resizeMode="cover"
            >

                <View>

                </View>

                <View>

                </View>

                <View>

                </View>

                <View>

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
    }
});

export default Landing;