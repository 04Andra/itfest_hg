import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

function KAuthChoose({photo, text}) {
    return (
        <View style={KAuthStyles.container1}>

            <TouchableOpacity style={KAuthStyles.touchableOpacity}>

                <Image
                    style={KAuthStyles.image}
                    source={photo}
                />

                <Text style={KAuthStyles.text}>
                    {text}
                </Text>

            </TouchableOpacity>

        </View>
    );
}

const KAuthStyles = StyleSheet.create({
    container1: {
        flex: 1,
    },
    touchableOpacity: {
        flex: 1,
        width: '20%',
        height: '40%',
        borderColor: 'black'
    },
    image: {
        width: '50%',
        height: '50%'
    },
    text: {
        fontSize: 12,
    }
});

export default KAuthChoose;