import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginVertical:5,
    },
    box:{
        flexDirection:"row",
        gap:10,
        borderWidth:2,
        borderColor:"red",
        borderRadius:25,
        margin:4,
    },
    image:{
        objectFit: "cover",
        width:100,
        height:100,
        borderTopLeftRadius:22,
        borderBottomLeftRadius:22,
    },
    text:{
        flex:1,
        padding:5,
    }
    
})

export default styles