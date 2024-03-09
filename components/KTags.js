import { Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";


const KTags = ({tagTitle, route}) => {
    const navigator = useNavigation()
     const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
        setIsPressed(true);
        navigator.navigate(route);
    };


    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{backgroundColor:"#45D33D", padding:10, borderRadius:10, alignItems:"center", borderWidth:0.2, shadowRadius:1}}
        >
            <Text style={{color:'white', fontWeight:'500', fontSize:18}}>{tagTitle}</Text>
        </TouchableOpacity>
    );
};

export default KTags;