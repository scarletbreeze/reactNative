

// App.js
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, StatusBar,CheckBox} from 'react-native';
import Content from './Content';
import update from 'react-addons-update';
// import {CheckBox} from'react-native-elements';



export default class App extends Component {
 constructor(props){
   super(props);
   this.state={
     checked: false,
     checked2:[false,false]
   }
 }

 onValueChange=()=>{ // 맨위
   let array = [];

   for(let i=0; i < this.state.checked2.length; i++){
     if(this.state.checked){
       array.push(false)
     }else{
       array.push(true)
     }
   }
   this.setState({
     checked: !this.state.checked,
     checked2: array
   });

 }
 onValueSubChange=(index)=>{ //개별
   this.setState({
     checked2:update(
     this.state.checked2,
     {
       [index]:{$set:!this.state.checked2[index]}
       }

   )});
}

 render() {
   console.log("tt")
   return (
     <View style={styles.main}>
     <StatusBar hidden/>
     <View style={styles.container}>
      <Image source={require('./menu-button.png')} style={styles.menuimg}/>
      <Image source={require('./glo2.png')} style={styles.mainimg}/>
      </View>
      <View style={styles.subcontainer}>
       <Text style={styles.letterBar}></Text>
       <Text style={styles.titleLetter}>계약관리</Text>
       <Text style={styles.subLetter}>모든 문서</Text>
       <Image source={require('./search.png')} style={styles.subimg}/>
      </View>
      <View style={styles.nav}>
       <CheckBox style={styles.checkbox}
         value={this.state.checked}
         onChange={this.onValueChange}
       />
        <Text style={styles.navTitle}>모든 문서</Text>
        <Text style={styles.navSub}>내문서함</Text>
      </View>
      <Content  onValueSubChange={this.onValueSubChange}
       value={this.state.checked2}
      />
     </View>

   );
 }
}

const styles = StyleSheet.create({
 main:{
   flex:1
 },
 checkbox:{
   marginTop: 0

 }
 ,
 container: {
   flex: 0.8,
   alignItems: 'center',

   flexDirection:'row',
   borderBottomColor:'grey',
   borderBottomWidth:0.5
 },
 subcontainer:{
   flex:1,
   flexDirection:'row',
   alignItems:'center'
 },
 letterBar:{
   fontSize:30,
   color:'navy'
 },
 titleLetter:{
   fontSize:30,
   color:'black',
   fontWeight:'bold',
   marginLeft:10
 },
 subLetter:{
   fontSize:15,
   color:'black',
   marginTop:15,
   marginLeft:10
 },
 subimg:{
   width:25,
   height:25,
   marginLeft:135
 },
 nav:{
   flex:0.5,
   flexDirection:'row',
   borderBottomColor:'grey',
   borderBottomWidth:0.5
 },
 navTitle:{
   color:'black',
   marginTop:5
 },
 navSub:{
   color:'black',
   marginLeft:200,
   marginTop:5
 }
 ,
 mainimg:{
   width:170,
   height:90,
   resizeMode:'contain',
   marginLeft:55

 },
 menuimg:{
   width:25,
   justifyContent:'flex-start',
   marginTop:5,
   marginLeft:15,
   height:25,
  // resizeMode:'contain'
 }

});