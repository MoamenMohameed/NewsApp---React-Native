import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        resizeMode: "cover",
        width:270,
        height:250,
        overflow:"hidden",
        borderRadius:20,
        margin:10
    },
    card : {
        backgroundColor:"#ffffffcd",
        borderRadius:10,
        marginTop:130,
        padding:3,
        marginHorizontal:10
    },
    DeadLine: {
        backgroundColor:"red",
        alignSelf:"flex-start",
        padding:6,
        borderRadius:6,
        margin:2 
    },
    text: {
        color:"white"
    }
})

export default styles