import {View, Text, Image, ScrollView, ImageBackground} from "react-native";
import KTags from "../../components/KTags";
import KProduct from "../../components/KProduct";
import KSpacer from "../../components/KSpacer";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Dairy from "./Dairy";
import KProducers from "../../components/KProducers";


const cards = [{
 img:"https://images.unsplash.com/photo-1520236060906-9c5ed525b025?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prodName:"Cherries",
    farmer:"Moise P.",
    produced:"Timisoara",
    price:"8 lei/kg"
},
    {
        img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prodName:"Potatoes",
        farmer:"Marius L.",
        produced:"Sacalaz",
        price:"2 lei/kg"
    },
    {
        img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prodName:"Carrots",
        farmer:"Elena B.",
        produced:"Periam",
        price:"4 lei/kg"
    },
    {

        img: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prodName:"Milk",
        farmer:"Elena B.",
        produced:"Albina",
        price:"2 lei/l"
    }
]
const producers = [{
    img:'https://media.istockphoto.com/id/1452381098/ro/fotografie/agronomul-inspecteaz%C4%83-culturile-de-soia-care-cresc-%C3%AEn-domeniul-agricol-conceptul-de.jpg?s=1024x1024&w=is&k=20&c=C7rv_j7nyydudRQtgnZ2kUhz8AP7t6qwU3htTHk8S58=',
    name:'Marius I.'
},
    {
       img:'https://media.istockphoto.com/id/1447451265/ro/fotografie/fermier-care-folose%C8%99te-tableta-pc-%C3%AEn-ferm%C4%83.jpg?s=1024x1024&w=is&k=20&c=kPtB-3YjQeEU1vfeSUw9lrOXZLmR5rpT_oDoek2sE50=',
       name:'Mia B.'
    },
    {
        img:'https://media.istockphoto.com/id/1447452428/ro/fotografie/fermierul-care-d%C4%83-f%C3%A2n-proasp%C4%83t-vacilor.jpg?s=612x612&w=is&k=20&c=njP8jAc2FErW7cMrltv0IeWGOsymtUQbqHLIjH3g16M=',
        name:'Alin C.'
    }
]
const image = {uri:"https://images.unsplash.com/photo-1469122312224-c5846569feb1?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
function Shop(){
    return(
        <View style={{flex:1}}>
            <ImageBackground source={image} resizeMode="cover" style={{ flex:1}} blurRadius={4}>
                <KSpacer h={20}/>
            <View style={{alignItems:'flex-end', padding:18, height:"15%"}}>
                <Image source={{uri:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
                       style={{width:"15%", height:"100%", borderRadius:80,shadowRadius:0.2}}/>
            </View>
            <View style={{padding:16}}>
                <Text style={{fontSize:22, fontWeight:'bold'}}>Shop by category</Text>
            </View>
            <View style={{flexDirection:"row", gap: 16, padding:18}}>
                <KTags tagTitle={"Vegetables"} route={Vegetables}/>
                <KTags tagTitle={"Fruits"} route={Fruits}/>
                <KTags tagTitle={"Dairy"} route={Dairy}/>
            </View>
            <ScrollView>
                <View style={{padding:16}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Favourites products</Text>
                </View>
            <View style={{padding:16}}>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection:'row', gap:10}}>
                        {
                            cards.map(card =>
                            <>
                                <KProduct img={card.img} produced={card.produced} farmer={card.farmer} prodName={card.prodName} price={card.price}/>
                            </>
                            )
                        }
                    </View>
            </ScrollView>
            </View>
            <KSpacer h={10}/>
            <View style={{padding:16}}>
                <Text style={{fontSize:20,fontWeight:'600'}}>Top Producers</Text>
            </View>
           <View style={{flexDirection:'row', gap:30, padding:16}}>
               {
                   producers.map(producer =>
                   <>
                       <KProducers name={producer.name} img={producer.img}/>
                   </>
                   )
               }
           </View>
        </ScrollView>
            </ImageBackground>
        </View>

    )
}
export default Shop;