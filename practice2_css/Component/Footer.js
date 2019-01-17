import React , {Component} from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
// import Logo from './img/glosign_png_black_665';
import {EvilIcons, MaterialCommunityIcons, AntDesign} from "@expo/vector-icons";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.footerFirst}>
            <AntDesign
              color="blank"
              size={15}
              name="earth" 
              style={{
                marginRight:5
                }} 
            />
            <Text>한국어 | Powered by Glohands|</Text>
        </View>
        <View style={styles.footerSecond}>
          <Text>이용약관 | 개인정보방침 | 고객센터 |</Text>
        </View>
        <View style={styles.footerThird}>
          <Text> Copyright </Text>
          <MaterialCommunityIcons
            color="blank"
            size={16}
            name="copyright" 
            style={{
            }} 
          />
          <Text> 2018 Glohands, Inc. All right reserved.</Text>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  //footer
  footer: {
    // height: 100,
    flex:0.1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems:'center',   
    justifyContent:'space-around', 
    margin:10,
  },
  footerFirst : {
    flex:0.33,
    flexDirection:'row'
  },
  footerSecond : {
    flex:0.34,
  },
  footerThird : {
    flex:0.33,
    flexDirection:'row'
  }
});


// 안드로이드만 padding을 22
//  height 를 22만큼.
