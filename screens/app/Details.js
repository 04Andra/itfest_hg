import {View, Text, ImageBackground} from "react-native";
import KSpacer from "../../components/KSpacer";


const image = {uri:'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
const moreDetails={
    "Milk":{
        "localitate":"Albina",
        "descipt":"Albina is a small village in the Moșnița Nouă commune, 9 km east of Timișoara, located in the immediate vicinity of the DJ592 county road that connects Timișoara to Buziaș and 3 km from the Timiș River.",
        "production":
            "Milk production is the process of obtaining milk from animals like cows, goats, or sheep for human consumption.",
        "producer":"Elena B. is a local farmer, a nature passionate who loves animals, especially cows. "
    },
    "Carrots":{
        "localitate":"Periam",
        "descipt":"Periam is located in the northwest of the Banat Plain, in a subdivision of the Mureș Plain called Aranca Plain.",
        "production":
            "Carrots grow from seeds planted in soil. They require sunlight, water, and proper soil conditions to develop. Carrots typically take about 2-4 months to grow, depending on the variety. Once mature, they are harvested by pulling them from the ground.",
        "producer":"Elena B. is a local farmer, a nature passionate who loves to grow plants and vegetables. "
    },
    "Potatoes":{
        "localitate":"Sacalaz",
        "descipt":"Sacalaz  is a commune in Timiș County, Romania. It is composed of three villages: Beregsău Mare, Beregsău Mic and Săcălaz (commune seat).",
        "production":
            "Potatoes grow from planted seed potatoes or potato pieces in soil. They need sunlight, water, and well-drained soil. The plants grow for 2-4 months before the potatoes are ready for harvest.",
        "producer":"Marius L. is a local farmer, a nature passionate who loves to grow plants and vegetables. "
    },
    "Cherries":{
        "localitate":"Timisoara",
        "descipt":"Timisoara is the capital city of Timiș County, Banat, and the main economic, social and cultural centre in Western Romania.",
        "production":
            "Cherries grow from cherry tree blossoms, which are pollinated by bees. The trees need sunlight, water, and well-drained soil to produce fruit. Cherries typically take a few months to mature after flowering. Once ripe, they are harvested by hand or with specialized equipment.",
        "producer":"Moise P. is a local farmer, a nature passionate who loves to grow plants and especially fruit trees. "
    },
    "Peaches":{
        "localitate":"Timisoara",
        "descipt":"Timisoara is the capital city of Timiș County, Banat, and the main economic, social and cultural centre in Western Romania.",
        "production":
            "Peaches grow on peach trees, which require sunlight, water, and well-drained soil. They begin as blossoms that are pollinated by bees, eventually forming fruit. Peaches take a few months to mature after flowering. Once ripe, they are harvested by hand.",
        "producer":"Mia B. is a local farmer, a nature passionate who loves to grow plants and especially fruit trees. "
    },
    "Apples":{
        "localitate":"Urseni",
        "descipt":"Urseni is located southeast of Timișoara, about 10 km from it. The village is crossed by the Timișoara-Buziaș railway and has its own station.",
        "production":
            "Apples grow on apple trees, which need sunlight, water, and well-drained soil. They start as blossoms that are pollinated by bees or other insects, turning into fruit over several months. Once ripe, apples are harvested by hand or with specialized equipment.",
        "producer":"Maria L. is a local farmer, a nature passionate who loves to grow plants and especially fruit trees. "
    },
    "Pears":{
        "localitate":"Periam",
        "descipt":"Periam is located in the northwest of the Banat Plain, in a subdivision of the Mureș Plain called Aranca Plain.",
        "production":
            "Pears grow on pear trees, which require sunlight, water, and well-drained soil. They start as blossoms that are pollinated by bees, developing into fruit over several months. Once ripe, pears are harvested by hand.",
        "producer":"Elena B. is a local farmer, a nature passionate who loves to grow plants and especially fruit trees. "
    },
    "Goat Cheese":{
        "localitate":"Albina",
        "descipt":"Albina is a small village in the Moșnița Nouă commune, 9 km east of Timișoara, located in the immediate vicinity of the DJ592 county road that connects Timișoara to Buziaș and 3 km from the Timiș River.",
        "production":
            "Milk production is the process of obtaining milk from animals like cows, goats, or sheep for human consumption.",
        "producer":"Marian V. is a local farmer, a nature passionate who loves animals, especially goats and cows. "
    },
    "Cheese":{
        "localitate":"Periam",
        "descipt":"Periam is located in the northwest of the Banat Plain, in a subdivision of the Mureș Plain called Aranca Plain.",
        "production":
            "Milk production is the process of obtaining milk from animals like cows, goats, or sheep for human consumption.",
        "producer":"Elena B. is a local farmer, a nature passionate who loves to grow plants, animals and vegetables. "
    },
    "Cow Milk":{
        "localitate":"Dumbravita",
        "descipt":"Dumbravita is a commune in Timiș County, Romania. It is composed of a single village, Dumbrăvița. One of the most developed and rich communes in Romania, Dumbrăvița has become in recent years a suburb of Timișoara.",
        "production":
            "Milk production is the process of obtaining milk from animals like cows, goats, or sheep for human consumption.",
        "producer":"Ion B. is a local farmer, a nature passionate who loves to grow animals and produce dairy natural dairy products. "
    },
}

function Details({navigation, route}){
    return(
        <View style={{flex:1}}>
            <ImageBackground source={image} resizeMode="cover" style={{ flex:1, justifyContent: 'center',alignItems:'center'}} blurRadius={2}>
            <View style={{borderRadius:20, backgroundColor:'#F1F5A8', height:'80%',padding:20, width:'80%',alignItems:'center'}}>
                <Text style={{fontSize:20, fontWeight:'600'}}>{route.params.prodName}</Text>
                <KSpacer h={10}/>
                <View style={{flexDirection:'column', gap:10}}>
                    <Text style={{fontSize:16,fontWeight:'500'}}>{moreDetails[route.params.prodName].localitate}</Text>
                    <Text style={{fontSize:16,fontWeight:'500'}}>{moreDetails[route.params.prodName].descipt}</Text>
                    <Text style={{fontSize:16,fontWeight:'500'}}>{moreDetails[route.params.prodName].producer}</Text>
                    <Text style={{fontSize:16,fontWeight:'500'}}>{moreDetails[route.params.prodName].production}</Text>
                </View>
            </View>
            </ImageBackground>
        </View>
    )
}
export default Details;