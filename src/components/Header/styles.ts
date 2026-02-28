import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container:{
    padding : 10,
    // borderWidth:2,
    // borderColor:'black',
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center"
  },

  text: {
    fontSize:20,
    fontWeight:"bold"
  },
  Image:{
    borderRadius:50, 
    width:40,
    height:40
  }
})

export default styles