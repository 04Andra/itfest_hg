import { Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
const KButton = ({title, color, route}) => {
    const navigator = useNavigation()
    return(
    <TouchableOpacity onPress={() => navigator.navigate(route)}
                      style={{backgroundColor:color, borderRadius:10, alignItems:'center', padding:10, width:'60%'}}>
        <Text style={{color:'white',fontSize:16, fontWeight:'500'}}>{title}</Text>
    </TouchableOpacity>

    )
}

export default KButton;