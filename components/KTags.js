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
            style={{backgroundColor:"#45D33D"}}
        >
            <Text style={{color:'white', fontWeight:'400'}}>{tagTitle}</Text>
        </TouchableOpacity>
    );
};

export default KTags;