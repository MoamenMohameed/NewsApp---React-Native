import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles' 
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigation, NavigationProp } from '@react-navigation/native';


export default function MainNews() {
  const [TopNews, setTopNews] = useState([])
  const navigation = useNavigation<NavigationProp<any>>()
  
  function Goto(article:any) {
    navigation.navigate("ArticleDetails",{ article : article })
  }

      useEffect(()=>{
      axios.
      get('https://newsapi.org/v2/top-headlines?country=us&apiKey=544cd2d0bd5d4f0fa6134f872e457fad')
          .then(function (response) {
              setTopNews(response.data.articles.filter((item:any) => item.urlToImage != null))
          })
          .catch(function (error) {
              console.log(error);
          });
      },[])

  function renderItems(item:any){
  return (
      <TouchableOpacity onPress={() => Goto(item)}>
        <View style={{display:"flex", alignItems:"center", justifyContent:"center", marginVertical:20}}>
          <ImageBackground style={styles.container} source={{uri:item.urlToImage??"no Image"}}>
            <View style={styles.card}>
                <View style={styles.DeadLine}>
                    <Text style={styles.text}>{item.source.name}</Text>
                </View>
                <Text numberOfLines={2} ellipsizeMode="tail" style={{marginHorizontal:5}}>
                  {item.title}
                </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
  }
  return(
  <FlatList
    data={TopNews}
    renderItem={({item})=> renderItems(item)}
    horizontal={true}
    showsHorizontalScrollIndicator={false}/>
  )
}

