import { Image, ScrollView, Text, View } from 'react-native'
import Header from '../../components/Header/Header'
import MainNews from '../../components/MainNews/MainNews'
import { useEffect } from 'react'
import TopNews from '../../components/TopNews/TopNews'
import { SafeAreaView } from 'react-native-safe-area-context'
const HomeScreen = ()=> {
    //  useEffect(() =>{
    //       alert("Hello from home screen")
    //     }, [])
    
    return (
      <SafeAreaView>
      <ScrollView>
        <Header/>
        <MainNews/>
        <TopNews/>
      </ScrollView>
      </SafeAreaView>
    )
}

export default HomeScreen