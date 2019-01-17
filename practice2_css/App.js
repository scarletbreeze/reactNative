import React , {Component} from 'react';
import { CheckBox,StyleSheet,  View , Image} from 'react-native';
// import Logo from './img/glosign_png_black_665';
import {EvilIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import Navbar from './Component/Navbar';
import Information from './Component/Information';
import ButtonGroup from './Component/ButtonGroup';
import Footer from './Component/Footer';

export default class App extends React.Component {
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
      return (
      <View style={styles.container}>
        <Navbar />
        <View style={styles.border}/>
        <Information />
        {/* <View style={{ height: 10}}/> */}
        <View style={styles.border}/>
        <CheckBox style={styles.checkbox}
         value={this.state.checked}
         onChange={this.onValueChange}
       />
        <ButtonGroup onValueSubChange={this.onValueSubChange}
          value={this.state.checked2} />
        <View style={styles.border}/>
        <Footer style={styles.footer}/>
      </View>        
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // paddingTop:22 -> 안드로이드만
  },

  //border
  border: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }

  
});


// 안드로이드만 padding을 22
//  height 를 22만큼.
