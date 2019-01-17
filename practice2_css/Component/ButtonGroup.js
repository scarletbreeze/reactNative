import React , {Component} from 'react';
import { CheckBox,FlatList,StyleSheet, Text, View , Image} from 'react-native';
// import Logo from './img/glosign_png_black_665';
import {EvilIcons, MaterialCommunityIcons , Feather} from "@expo/vector-icons";


function ButtonGroup(props){

    return (
      <View style={styles.buttonGroup}>
        {/* <View style={styles.first}> */}
          <View style={styles.left}>
            <MaterialCommunityIcons
              color="blank"
              size={30}
              name="checkbox-blank-outline" 
              style={{
                marginLeft: 4,
                marginTop:20,
                marginBottom:20,
                }} 
            /> 
          </View>
          {/* <View style={styles.leftText}> */}
              <FlatList
              data={[{name:'문서제목1',docuState:'작성중 문서',date:'2019-01-09 13:40:46'},
              {name:'문서제목2',docuState:'취소한 문서',date:'2019-01-09 13:40:46'}]}
                renderItem={({item, index})=><View style={styles.flatbox}>
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
            <View>
                <Text>원격</Text>
                </View>
            </View>
                }
            />
          {/* </View> */}
          {/* <View style={styles.rightText}>
            <Text>원격</Text>
          </View>
          <View style={styles.Right}>
            <Feather
              color="blank"
              size={10}
              name="more-vertical" 
              style={{
              }} 
            />
          </View> */}
        {/* </View> */}
      
      </View>
    );
  }

const styles = StyleSheet.create({
 
  //button group
  buttonGroup: {
    // height: 200,
    flex:0.65,
    backgroundColor: '#fff',
    flexDirection:'row',
  },

  
  left:{
    flex:0.1,
  },

  leftText:{
    flex:0.4,
  },
  RightText:{
    flex:0.4,
    // textAlign:'center',
  },
  Right:{
    flex:0.1,
    flexDirection:'column',
    justifyContent:'center',
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
},

});
export default ButtonGroup;

// 안드로이드만 padding을 22
//  height 를 22만큼.
