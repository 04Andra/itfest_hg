import {View, Text, Image, Button, TouchableOpacity} from "react-native";
import KButton from "./KButton";
import {useContext, useState} from "react";
import KSpacer from "./KSpacer";
import {useNavigation} from "@react-navigation/native";
import {MyContext} from "../assets/context/MyContext";


const KProduct = ({img, prodName, farmer, produced, price, totalProducts, setTotalProducts}) => {
    const [quant, setQuant] = useState(0)
    const navigator = useNavigation()
    const [isButtonActive, setIsButtonActive] = useState(true)
    const addtoCart = () => {
        setTotalProducts(totalProducts + quant)
    }
    const {productCardBig, setProductCardBig} = useContext(MyContext);
    const {productCardSmall, setProductCardSmall} = useContext(MyContext);

    return (
        <View style={{ borderRadius: 10, shadowOpacity: 2,backgroundColor:'white'}}>
            <Image source={{uri: img}} height={130} width={300} borderRadius={10}blurRadius={1}/>
            <View style={{flexDirection: 'row', gap: 30, width: 300, padding: 10}}>
                <View style={{flexDirection: 'column', gap: 8, width: '40%'}}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}>{prodName}</Text>
                    <View style={{gap: 4}}>
                        <Text style={{fontWeight: "500", color: '#31363F',fontSize:15}}>{produced}📍</Text>
                        <Text style={{fontWeight: '500', color: '#31363F',fontSize:15}}>{farmer}</Text>
                        <TouchableOpacity
                            onPress={() => navigator.navigate('Details', {img, prodName, farmer, produced, price})}>
                            <Text style={{
                                fontWeight: '500',
                                textDecorationLine: 'underline',
                                alignItems: 'center',
                                fontSize:15
                            }}>Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}> Price: {price}</Text>
                    <KSpacer h={8}/>
                    <View style={{
                        flexDirection: 'row',
                        gap: 18,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        backgroundColor: "#A5DD9B",
                        width: '70%',
                        alignSelf: 'center',
                        padding: 4
                    }}>
                        <TouchableOpacity onPress={() => setQuant(Math.max(quant - 1, 0))}
                                          style={{backgroundColor: 'transparent'}}>
                            <Text style={{fontSize: 20, fontWeight: "bold"}}> - </Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{quant}</Text>
                        <TouchableOpacity onPress={() => setQuant(quant + 1)} style={{backgroundColor: 'transparent'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}> + </Text>
                        </TouchableOpacity>
                    </View>
                    <KSpacer h={10}/>
                    <TouchableOpacity onPress={() => navigator.navigate("Map")} style={{borderRadius:10, backgroundColor:"#A5DD9B",padding:8}}>
                        <Text style={{fontWeight:'500', fontSize:16}}>Your location</Text>
                    </TouchableOpacity>
                    <KButton onPress={() => {

                        addtoCart()
                        setQuant(0)
                    }}
                    />
                </View>
            </View>
            <View style={{alignItems: 'center', paddingBottom: 10}}>
                <TouchableOpacity onPress={() => {
                    if (quant !== 0) {{
                        setIsButtonActive(false)
                        alert(`Order sent to ${farmer}`)
                        setProductCardSmall(prev => [...prev, {
                            img: img,
                            prodName: prodName,
                            farmer: farmer,
                            produced: produced,
                            price: price,
                        //    totalProducts: totalProducts,
                        //    setTotalProducts: setTotalProducts,
                        //    productCardSmall: productCardSmall,
                        }])
                        console.log(productCardSmall)
                    }} else {
                        alert('No quantity!')
                    }
                }}
                                  disabled={!isButtonActive}
                                  style={{
                                      borderRadius: 10,
                                      backgroundColor: "#F1F5A8",
                                      padding: 10,
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                      gap: 6
                                  }}>
                    <Image
                        source={{uri: 'https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Tote_Bag-512.png'}}
                        style={{height: 20, width: 20}}
                    />
                    <Text style={{fontWeight: '600', fontSize: 18}}>Send order</Text>
                </TouchableOpacity>


            </View>
        </View>
    )


}
export default KProduct;