import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useContext} from "react";
import {MyContext} from "../assets/context/MyContext";

function KAuthChooseCustomer({photo, text}){

    const {authCustomerContext, setAuthCustomerContext} = useContext(MyContext);
    const {authProducerContext, setAuthProducerContext} = useContext(MyContext);

    const handlePress = () => {
        if (authCustomerContext === true) {
            setAuthCustomerContext(false)
            if (authProducerContext === false) {
                setAuthProducerContext(true)
            }
        } else {
            setAuthCustomerContext(true)
            if (authProducerContext === true) {
                setAuthProducerContext(false)
            }
        }
    }

    return (

        <TouchableOpacity
            style={ authCustomerContext ? [
                KAuthStyles.touchableOpacity,
                KAuthStyles.shadowProp
            ]: [
                KAuthStyles.ifPress,
                KAuthStyles.shadowProp
            ]}
            onPress={() => {
                handlePress()
                console.log(authCustomerContext)
            }}
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
    ifPress: {
        width: '35%',
        height: '90%',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#C2D6C0',
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

export default KAuthChooseCustomer;