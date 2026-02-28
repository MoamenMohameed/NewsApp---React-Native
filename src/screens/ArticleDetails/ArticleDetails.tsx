import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {useNavigation, NavigationProp} from '@react-navigation/native'
import Ionicons from '@react-native-vector-icons/ionicons'
import { useRoute } from '@react-navigation/native'
import  useFavStore  from '../../Store/Store'


export default function ArticleDetails() {
  const route= useRoute()
  const {article} = route.params as any
  const {AddFav} = useFavStore()

  const navigation = useNavigation<NavigationProp<any>>()
  function Goback() {
    navigation.goBack()
  }

  return (
  <SafeAreaView style={{flex:1}}>
    <View 
      style={{
        flex:1,
        justifyContent:"space-between",
        marginVertical:20
      }}>

      <View>
          <Pressable 
          onPress={Goback}
          style={{width:50, backgroundColor:"lightgray", padding:10, borderRadius:5, marginLeft:16}}>
            <Ionicons name='arrow-back' size={22} color={"black"} style={{textAlign:"center"}}/>
          </Pressable>

          <Image source={{uri:article.urlToImage}} style={{width:"100%", height:200, marginVertical:20}}/>
          <Text style={{fontSize:18, fontWeight:"bold", marginHorizontal:16}}>{article.title}</Text>
          <Text style={{fontSize:16, marginHorizontal:16, marginVertical:10}}>{article.description}</Text>
          <Text style={{fontSize:16, marginHorizontal:16, marginVertical:10}}>{article.url}</Text>
          <Text style={{fontSize:16, marginHorizontal:16, marginVertical:10}}>{article.source.name}</Text>
          <Text style={{fontSize:16, marginHorizontal:16, marginVertical:10}}>{article.publishedAt}</Text>
      </View>
      
    <Pressable style={{padding:10, backgroundColor:"lightgray" , borderRadius:5}} onPress={() => AddFav(article)}>
        <Text style={{fontSize:18, textAlign:"center"}}>Add to Favorites</Text>
      </Pressable>

    </View>
  </SafeAreaView>
)}
