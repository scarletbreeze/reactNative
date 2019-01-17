import React, {Component} from 'react';
import { StyleSheet, View , Image} from 'react-native';
import {EvilIcons, } from "@expo/vector-icons";

export default class Navbar extends Component {
    render() {
      return (
        <View style={styles.navBar}>
          <View style={styles.leftMenu}>
            <EvilIcons
              color="black"
              size={25} 
              name="navicon"
              style={{ marginLeft:20, marginTop:20 }}
            />
          </View>
          <View style={styles.navBarView}>   
            <Image source={require('.././img/glosign_png_black_665.png')} 
              style={{height:27.5, width:118,
            }} />      
          </View>  
            <View style={styles.rightMenu}></View>
        </View>
      );
    }
  }
  

const styles = StyleSheet.create({
  //nav

  navBar: {
    // flex:1,
    height: 70,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
  },
  leftMenu: {
    flex: 0.2,
  },
  rightMenu: {
    flex: 0.2,
  },
  navBarView: {
    flex: 0.6,
    marginTop:15,
    justifyContent: "center",
    alignItems: "center"
  },
});


