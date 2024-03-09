import {View, Text, TouchableOpacity, Image, ScrollView, ImageBackground} from "react-native";
import {useNavigation} from "@react-navigation/native";
import KSpacer from "../../components/KSpacer";
import KTags from "../../components/KTags";
import Dairy from "./Dairy";
import KProduct from "../../components/KProduct";
import Vegetables from "./Vegetables";


const fruits = [{
    img: "https://images.unsplash.com/photo-1639588473831-dd9d014646ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prodName: "Peaches",
    farmer: "Mia B.",
    produced: "Timisoara",
    price: "6 lei/kg"
},
    {
        img: "https://images.unsplash.com/photo-1610397962076-02407a169a5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prodName: "Apples",
        farmer: "Maria L.",
        produced: "Urseni",
        price: "2 lei/kg"
    },
    {
        img: "https://images.unsplash.com/photo-1631160299919-6a175aa6d189?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prodName: "Pears",
        farmer: "Elena B.",
        produced: "Periam",
        price: "3 lei/kg"
    }
]

const image = {uri:"https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

const Fruits = () => {
        const navigator = useNavigation()
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={image} resizeMode="cover" style={{ flex:1}} blurRadius={4}>
                <KSpacer h={10}/>
                <View style={{justifyContent: 'flex-start', padding: 16}}>
                    <TouchableOpacity onPress={() => navigator.goBack()}>
                        <Image
                            source={{uri: 'https://static-00.iconduck.com/assets.00/arrow-left-icon-2048x1433-le08mlmd.png'}}
                            style={{height: 20, width: 34}}/>
                    </TouchableOpacity>
                </View>
                <KSpacer h={20}/>
                <View style={{flexDirection: "row", gap: 16, padding: 18}}>
                    <KTags tagTitle={"Vegetables"} route={Vegetables}/>
                    <KTags tagTitle={"Fruits"} route={Fruits}/>
                    <KTags tagTitle={"Dairy"} route={Dairy}/>
                </View>
                <KSpacer h={10}/>
                <View style={{marginLeft:20}}>
                    <Text style={{fontWeight: '600', fontSize: 20}}>Products on sale</Text>
                </View>
                <KSpacer h={30}/>
                <View style={{alignItems:'center',flex:1}}>
                    <ScrollView  contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
                        {
                            fruits.map(fruit =>
                                <>
                                    <KProduct img={fruit.img} price={fruit.price} prodName={fruit.prodName} farmer={fruit.farmer}
                                              produced={fruit.produced}/>
                                    <KSpacer h={20}/>
                                </>
                            )
                        }
                    </ScrollView>
                </View>
                </ImageBackground>
            </View>
        )
}
export default Fruits;