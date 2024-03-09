import {View, Image, StyleSheet, Text, ScrollView} from "react-native";
import {useContext} from "react";
import {MyContext} from "../../assets/context/MyContext";
import KProduct from "../../components/KProduct";
import KShopProfile from "../../components/KShopProfile";
import KSpacer from "../../components/KSpacer";


function Profile() {

    const {productCard, setProductCard} = useContext(MyContext);

    const {productCardSmall, setProductCardSmall} = useContext(MyContext);

    console.log(productCardSmall);

    return (
        <View style={profileStyles.containerMare}>

            <View style={profileStyles.container1}>

                <Image style={profileStyles.userImage}
                       source={{uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                />

                <Text style={profileStyles.usernameText}>Username</Text>
                <KSpacer h={30}/>
            </View>
            <View style={{marginLeft:20}}>
                <Text style={{fontSize:22, fontWeight:'600'}}>Orders sent</Text>
            </View>
            <KSpacer h={10}/>
            <View style={profileStyles.container2}>
                <View style={{flex: 0.75}}>
                    <ScrollView horizontal={true} contentContainerStyle={{padding: 10,gap:10,marginLeft:10}}>

                        {
                            productCardSmall.map(element => {
                               return (

                                <>
                                    <KShopProfile img={element.img} produced={element.produced}
                                                  farmer={element.farmer}
                                                  prodName={element.prodName} price={element.price}/>
                                    <KSpacer h={20}/>
                                </>

                            )
                            })
                        }
                    </ScrollView>
                </View>


            </View>

        </View>
    )
}

const profileStyles = StyleSheet.create({
    containerMare: {
        flex: 1,
    //    justifyContent: 'center',
    //    alignItems: 'center'
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    container2: {
        flex: 2

    },
    userImage: {
        width: "20%",
        height: "40%",
        borderRadius: 80,
    },
    usernameText: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});

export default Profile;