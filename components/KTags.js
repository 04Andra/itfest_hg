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
            style={{backgroundColor: isPressed ? '#A5DD9B':'#F1F5A8', padding:10, borderRadius:10, alignItems:"center", borderWidth:0.2, shadowRadius:1}}
        >
            <Text style={{color:'#31363F', fontWeight:'500', fontSize:18}}>{tagTitle}</Text>
        </TouchableOpacity>
    );
};

export default KTags;