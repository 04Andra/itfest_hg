import {View, Text, Image, Button, TouchableOpacity} from "react-native";
import KButton from "./KButton";
import {useContext, useState} from "react";
import KSpacer from "./KSpacer";
import {useNavigation} from "@react-navigation/native";
import {MyContext} from "../assets/context/MyContext";


const KShopProfile = ({img, prodName, farmer, produced, price, totalProducts, setTotalProducts}) => {
    const [quant, setQuant] = useState(0)
    const navigator = useNavigation()
    const {productCardBig, setProductCardBig} = useContext(MyContext);
    const {productCardSmall, setProductCardSmall} = useContext(MyContext);

    return (
        <View style={{borderWidth: 1, borderRadius: 10, shadowOpacity: 0.3}}>
            <Image source={{uri: img}} height={130} width={300} borderRadius={10}/>
            <View style={{flexDirection: 'row', gap: 30, width: 300, padding: 10}}>
                <View style={{flexDirection: 'column', gap: 8, width: '40%'}}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}>{prodName}</Text>
                    <View style={{gap: 4}}>
                        <Text style={{fontWeight: "500", color: '#31363F'}}>{produced}📍</Text>
                        <Text style={{fontWeight: '500', color: '#31363F'}}>{farmer}</Text>
                        <TouchableOpacity
                            onPress={() => navigator.navigate('Details', {img, prodName, farmer, produced, price})}>
                            <Text style={{
                                fontWeight: '500',
                                textDecorationLine: 'underline',
                                alignItems: 'center'
                            }}>Details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}> Price: {price}</Text>
                    <KSpacer h={8}/>
                </View>
            </View>

        </View>
    )


}
export default KShopProfile;