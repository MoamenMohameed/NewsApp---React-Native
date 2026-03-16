import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigation, NavigationProp } from '@react-navigation/native';


function TopNews() {
    const [TopNews, setTopNews] = useState([])
    const navigation = useNavigation<NavigationProp<any>>()
    function Goto(article:any) {
        navigation.navigate("ArticleDetails",{ article : article })
      }
    useEffect(()=>{
    axios.
    get('https://newsapi.org/v2/top-headlines?country=us&apiKey=')
        .then(function (response) {
            setTopNews(response.data.articles)
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])
    
    function renderitems(item:any){
        return (
            <TouchableOpacity onPress={() => Goto(item)}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image source={{
                        uri:item.urlToImage}}
                    style={styles.image}/>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </View>
            </TouchableOpacity>
           
        )
    }

    return(
        <>
        <Text style={{fontSize:20, fontWeight:"bold", color:"red", marginHorizontal:16}}>Top News</Text>
        <FlatList data={TopNews}
         renderItem={({ item }) => renderitems(item)}
         contentContainerStyle={{paddingBottom:25}}/>
         </>
    )
}

export default TopNews