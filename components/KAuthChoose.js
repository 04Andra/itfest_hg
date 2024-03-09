import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";

function KAuthChoose({photo, text}){

        return (

            <TouchableOpacity
                style={[
                    KAuthStyles.touchableOpacity,
                    KAuthStyles.shadowProp
                ]}
            >

                <Image
                    style={KAuthStyles.image}
                    source={photo}

                />

                <Text style={KAuthStyles.text}>
                    {text}
                </Text>

            </TouchableOpacity>

        );
}

const KAuthStyles = StyleSheet.create({
    touchableOpacity: {
        width: '35%',
        height: '90%',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    image: {
        width: '50%',
        height: '50%'
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,

        elevation: 5,
    }
});

export default KAuthChoose;