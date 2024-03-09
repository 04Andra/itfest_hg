import {View, TouchableOpacity, Image, Text, ScrollView, ImageBackground} from "react-native";
import {useNavigation} from "@react-navigation/native";
import KSpacer from "../../components/KSpacer";
import KTags from "../../components/KTags";
import Fruits from "./Fruits";
import Dairy from "./Dairy";
import KProduct from "../../components/KProduct";


const veg = [{
    img: "https://media.istockphoto.com/id/1251268353/ro/fotografie/rosii-organice-proaspete-pe-fond-rustic-din-lemn.jpg?s=612x612&w=is&k=20&c=TSU_UKa-x-x1O5dvxkJY8vZWjXxJpxdyXK9xHCxA-qo=",
    prodName: "Tomatoes",
    farmer: "Moise P.",
    produced: "Timisoara",
    price: "3 lei/kg"
},
    {
        img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prodName: "Potatoes",
        farmer: "Marius L.",
        produced: "Sacalaz",
        price: "2 lei/kg"
    },
    {
        img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prodName: "Carrots",
        farmer: "Elena B.",
        produced: "Periam",
        price: "4 lei/kg"
    }
]
const image = {uri:"https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
const Vegetables = () => {
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
                <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
                    {
                        veg.map(vg =>
                            <>
                            <KProduct img={vg.img} price={vg.price} prodName={vg.prodName} farmer={vg.farmer}
                                      produced={vg.produced}/>
                                <KSpacer h={20}/>
                            </>
                           )
                            }
                            </ScrollView>
                        </View>
            </ImageBackground>
            </View>
    )}
                    export default Vegetables;