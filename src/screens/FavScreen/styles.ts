import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginVertical:10,
    },
    box:{
        flexDirection:"row",
        gap:10,
        borderWidth:2,
        borderColor:"red",
        borderRadius:9,
        margin:4,
    },
    image:{
        objectFit: "cover",
        width:100,
        height:100,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
    },
    text:{
        flex:1
    }
    
})

export default styles