import React , {Component} from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
// import Logo from './img/glosign_png_black_665';
import {EvilIcons, MaterialCommunityIcons} from "@expo/vector-icons";

export default class Information extends Component {
    render() {
      return (
        <View style={styles.information}>
          <View style={styles.info1}>
            <Text style= {{ fontSize:26}}>| 계약관리 </Text>
            <Text style={{fontSize:14, marginTop:10}}>모든 문서</Text>
              <EvilIcons
                color="black"
                size={25}
                name="search"
                style={{marginLeft:170}}
              />
          </View>
          
          <View style={styles.info_check}>
            <View style={styles.checkLeft}>
              <MaterialCommunityIcons
                color="black"
                size={30}
                name="checkbox-blank-outline"  
              />
              <Text style={{marginLeft:5}}>모든 문서</Text>
              <EvilIcons
                color="black"
                size={25}
                name="chevron-down"
              />
            </View>
            <View style={styles.checkcenter}/>
            <View style={styles.checkRight}>
                <Text>내 문서함</Text>
                <EvilIcons
                color="black"
                size={25}
                name="chevron-down"
              />
            </View>
          </View> 
        </View>
      )
    }
  }
const styles = StyleSheet.create({
    //information

  information: {
    flex:0.25,
    backgroundColor: '#fff',
    // flexDirection: "column",
  },

  info1: {
    flex:0.7,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:7
  },

  info_check:{
    flex:0.3,
    flexDirection:'row',
    margin:5
    
  },
  checkLeft :{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flex:0.3,
  },
  checkcenter:{
    flex:0.4,
  },
  checkRight :{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    flex:0.3,
  },
});