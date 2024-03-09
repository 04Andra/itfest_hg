import {View,Image,Text} from "react-native";

const KProducers = ({img, name}) => {
    return(
        <View style={{flexDirection:'column', gap:2, alignItems:'center'}}>
            <Image source={{uri:img}} style={{borderRadius:100, height:60,width:60}}/>
            <Text style={{fontSize:16, fontWeight:'500', color:'#31363F'}}>{name}</Text>
        </View>
    )
}

export default KProducers;