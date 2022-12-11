import * as React from 'react';
import {StyleSheet, View,SafeAreaView, Text, Image, Dimensions, ScrollView} from 'react-native';
import {
  ICNotif
} from '../../assets'
import { MiniCard } from '../../Componets'
import { useSelector, useDispatch } from 'react-redux'
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default TaskScreen = () => {
  const nama = useSelector((state) => state.user.nama)
  return (
    <SafeAreaView style={{backgroundColor:'#261863', flex:1}}>
    <View style={style.containerTop}>
      <View >
        <Text style={style.textNameStyle}>{nama}</Text>
        
      </View>
      <View>
        <Image
          source={ICNotif}/>
      </View>
    </View>

    <View style={style.bodyContent}>
      <ScrollView style={{padding:30}}>
        <View>

        </View>
      </ScrollView>
      <View style={style.bodyContentTwo}>
      <ScrollView style={{padding:20}}>
        <Text style={style.textHeadStyle}>All Task</Text>
      </ScrollView>
    </View>
    </View>
    
  </SafeAreaView>
);
};

const style = StyleSheet.create({
containerTop:{
  flexDirection:'row',
  justifyContent:'space-between',
  padding:20,
  marginTop:20
},
textHeadStyle:{
  fontWeight:'500',
  fontSize:35,
  alignSelf:'center'
},
textNameStyle:{
  fontWeight:'bold',
  fontSize:30,
  color:'#A85CA3'
  
},
tamCont:{

},
textWelcome:{
  color:'white',
  fontWeight:'bold',
  fontSize:18,
},
bodyContent:{
  height:WINDOW_HEIGHT, 
  backgroundColor:'pink',
  borderTopRightRadius:50,
  borderTopLeftRadius:50,
  marginTop:15
},
bodyContentTwo:{
  height:WINDOW_HEIGHT, 
  backgroundColor:'white',
  borderTopRightRadius:50,
  borderTopLeftRadius:50,
  marginTop:25
}
})