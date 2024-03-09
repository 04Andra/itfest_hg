import { Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";


const KTags = ({tagTitle, route}) => {
    const navigator = useNavigation()
     const [isPressed, setIsPressed] = useState(false);
    const onChangeColor = () =>{
        setIsPressed(true);
        navigator.navigate(route)
    }


    return (
        <TouchableOpacity
            onPress={onChangeColor}
            style={{backgroundColor: isPressed ? '#45D33D':'#7DF376', padding:10, borderRadius:10, alignItems:"center", borderWidth:0.2, shadowRadius:1}}
        >
            <Text style={{color:'white', fontWeight:'500', fontSize:18}}>{tagTitle}</Text>
        </TouchableOpacity>
    );
};

export default KTags;