import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import useFavStore from '../../Store/Store'
import styles from './styles'
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context'

export default function FavScreen() {

    const {FavList} = useFavStore()
    
    function renderitems(item:any){
        return (
                <View>
                    <View style={styles.box}>
                        <Image source={{
                            uri:item.urlToImage}}
                            style={styles.image}/>
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                </View>
 
           
        )
    }

    return(
        <SafeAreaView>
        <View style={styles.container}>
        <Text style={{fontSize:20, fontWeight:"bold", color:"red", marginHorizontal:16, marginVertical:10}}>Favorites</Text>
        <FlatList data={FavList}
         renderItem={({ item }) => renderitems(item)}
         contentContainerStyle={{paddingBottom:25}}/>
         </View>
         </SafeAreaView>
    )
}
