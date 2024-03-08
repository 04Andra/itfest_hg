import {View, Text} from "react-native";
import KTags from "../../components/KTags";
import KButton from "../../components/KButton";
import KSpacer from "../../components/KSpacer";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Dairy from "./Dairy";


function Shop(){
    return(
        <View style={{flex:1}}>
            <KSpacer h={20}/>
            <View style={{flexDirection:"row", gap: 6, padding:10}}>
                <KTags tagTitle={"Vegetables"} route={Vegetables}/>
                <KTags tagTitle={"Fruits"} route={Fruits}/>
                <KTags tagTitle={"Dairy"} route={Dairy}/>
            </View>
        </View>
    )
}
export default Shop;