import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import KSpacer from "../../components/KSpacer";
import KTags from "../../components/KTags";
import Vegetables from "./Vegetables";
import KProduct from "../../components/KProduct";
import Fruits from "./Fruits";


const dairies = [{
    img: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prodName: "Cow milk",
    farmer: "Ion B.",
    produced: "Dumbravita",
    price: "5 lei/l"
},
    {
        img: "https://images.unsplash.com/photo-1566935404705-c22355bfa3ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prodName: " Goat Cheese",
        farmer: "Marian V.",
        produced: "Albina",
        price: "22 lei/kg"
    },
    {
        img: "https://images.unsplash.com/photo-1625084561216-07dcebc2b233?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prodName: "Cheese",
        farmer: "Elena B.",
        produced: "Periam",
        price: "12 lei/kg"
    }
]
function Dairy(){
    const navigator = useNavigation()
    return (
        <View style={{flex: 1}}>
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
            <View style={{padding: 18, alignItems:'center'}}>
                <Text style={{fontWeight: '600', fontSize: 20}}>Products on sale</Text>
            </View>
            <KSpacer h={20}/>
            <View style={{alignItems:'center',flex:1}}>
                <ScrollView  contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
                    {
                        dairies.map(dairy =>
                            <>
                                <KProduct img={dairy.img} price={dairy.price} prodName={dairy.prodName} farmer={dairy.farmer}
                                          produced={dairy.produced}/>
                                <KSpacer h={20}/>
                            </>
                        )
                    }
                </ScrollView>
            </View>
        </View>
    )
}
export default Dairy;