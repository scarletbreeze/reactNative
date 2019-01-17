// content.js
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,CheckBox} from 'react-native';
// import { CheckBox } from 'react-native-elements';



function Content(props) {
   return (
     <View style={styles.content}>
         <FlatList style={styles.flatlist}
           data={[{name:'문서제목1',docuState:'작성중 문서',date:'2019-01-09 13:40:46'},
           {name:'문서제목2',docuState:'취소한 문서',date:'2019-01-09 13:40:46'}]}
            renderItem={({item, index})=><View style={styles.flatbox}>}
                <View style={styles.flatTextView}>
                    <CheckBox style={styles.flatCheckBox}
                    onChange={() => {
                    props.onValueSubChange(index)
                    }}
                    value={props.value[index]}
                />
            <View>
            <Text>{item.name}</Text>
            <Text>{item.docuState}</Text>
            <Text>{item.date}</Text>
            </View>
        </View>
        <View style={styles.flatSubtext}>
            <Text >원격</Text>
            </View>
        </View>
            }
        />
     </View>

   );

}

export default Content
const styles = StyleSheet.create({
   content:{
       flex:8
   },
   flatlist:{
       // paddingTop:10,

   },
   flatTextView:{
       flexDirection:'row'
   },
   flatbox:{
       paddingTop:10,
       borderBottomColor:'grey',
       borderBottomWidth:0.5,
       paddingBottom:10,
       flexDirection:'row',
       // justifyContent:'space-between'
   },
   flatSubtext:{
       marginLeft:70,
       alignSelf:'center'
   },
   flatCheckBox:{
       alignSelf:'center'
   }
 });