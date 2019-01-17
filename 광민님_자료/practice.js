component > Chat > index.js

import {connect} from 'react-redux';
import Chat from './presenter';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../reducer';
import Chat2 from '../../screens/Chat'
function mapStateToProps(state){
   const { value, data,textContent}=state;
   return {
       value,
       data,
       textContent
   };
}
function mapDispatchToProps(dispatch){
   return{
       chatCreate:bindActionCreators(actionCreators.chatCreate,dispatch),
       chatDelete:bindActionCreators(actionCreators.chatDelete,dispatch),
       chatEnter:bindActionCreators(actionCreators.chatEnter,dispatch)
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat)
components > Chat > presenter.js

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,FlatList,TouchableOpacity} from 'react-native';
import update from 'react-addons-update';
import {Navigation} from 'react-native-navigation';

class Chat extends Component {


//   btn1_onPress=()=>{
//     this.setState({
//       value:this.state.value+1,
//       data: update(
//         this.state.data,
//         {
//           $push:[{name:'채팅방',id:this.state.value}]
//         }
//       )
//     })

//   }
//   btn2_onPress=()=>{
//     this.setState({
//       data: update(
//         this.state.data,
//         {
//           $splice:[[this.state.id,1]]
//         }
//       )
//     })
//   }
 goToScreen=(screenName)=>{
   Navigation.push(this.props.componentId,{
     component:{
       name:screenName
     }
   })
  // console.log(this.props.componentId)
 }
 render() {
     const{
         value,
         data,
         chatCreate,
         chatDelete,
         chatEnter
     }=this.props;

   return (
     <View style={styles.container}>
       <View style={styles.btn}>
         <Button title="채팅방 생성" onPress={chatCreate}/>
         <View style={styles.btn1}></View>
         <Button title="채팅방 삭제" onPress={chatDelete}/>
       </View>
       <View style={styles.chatList}>
         <FlatList data={data}
         style={{flex: 1}}
           renderItem={({item})=> {
           return (
           <View key={item.id + item.name} style={styles.flatbox}>
             <TouchableOpacity style={styles.liststyle} onPress={chatEnter}>
               <Text>{item.name}</Text>
               <Text>{item.id}</Text>
             </TouchableOpacity>
           </View>)}
           }/>
       </View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 btn:{
   marginTop:20,
   flex:1,
   flexDirection:'row'
 },
 btn1:{
   marginLeft:20
 },
 chatList:{
   flex:9,
   minHeight: 200,
   width: 200

 },
 flatbox:{
     flex: 1,
   paddingTop:10,
   marginTop:10,
   width:200,
   justifyContent:'center',

   borderWidth:0.5,
   paddingBottom:10,
   flexDirection:'row',

},
 liststyle:{
   flexDirection:'row'
 }

});

export default Chat;
screens > Chat.js

import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,FlatList,TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';
class Chat2 extends Component {
   constructor(props){
       super(props);
       this.state={
           text:'asd'
       };
   }
   onSubmitEdit=()=>{
    console.log(this.state.text)
       console.log(this.props)
   }

   render() {
       return (
          <View style={styles.chatContainer}>
                <View style={styles.chatNav}>
                    <Text>채팅방</Text>
                </View>
                <View style={styles.chatContent}>
                {/* <FlatList data={this.state}
                         renderItem={({item})=> {
                               return (
                                        <View >
                                        <Text>{item}</Text>
                                        </View>)}
                }/> */}
                </View>
                <View style={styles.chatInput}>
                <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1,
                       flex:1}}
              keyboardAppearance='dark'
              keyboardType='defalut'
              onChangeText={(text)=>this.setState({text})}
              value={this.state.text}
              onSubmitEditing={this.onSubmitEdit}
              />
               <Button color='purple' style={styles.submitBtn}title="submit" onPress={this.onSubmitEdit}/>
                </View>
          </View>
       );
   }
}


const styles = StyleSheet.create({
   chatContainer:{
       flex:1,
   },
   chatNav:{
       flex:0.3
   },
   chatContent:{
       flex:5,
       backgroundColor:'pink'
   },
   chatInput:{
       flex:0.5,
       flexDirection:'row'
   },
   flatbox:{
   flex: 1,
     paddingTop:10,
     marginTop:10,
     width:200,
     justifyContent:'center',

     borderWidth:0.5,
     paddingBottom:10,
     flexDirection:'row',
    },
   submitBtn:{
       flex:0.5,
       height:40,
       alignItems: 'center',

   }
})
export default Chat2;
screens > index.js

import {connect} from 'react-redux';

import Chat2 from './Chat';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../reducer';
import reducers from '../reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
let store=createStore(reducers);

<Provider store={store}>
   <Chat2/>
</Provider>
function mapStateToProps(state){
   const { value, data,textContent}=state;
   return {
       value,
       data,
       textContent
   };
}
function mapDispatchToProps(dispatch){
   return{
       chatCreate:bindActionCreators(actionCreators.chatCreate,dispatch),
       chatDelete:bindActionCreators(actionCreators.chatDelete,dispatch),
       chatEnter:bindActionCreators(actionCreators.chatEnter,dispatch)
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat2)
App.js
App.js




import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,FlatList,TouchableOpacity} from 'react-native';
import update from 'react-addons-update';
import {Navigation} from 'react-native-navigation';
import Chat from './components/Chat'
import reducer from './reducer';
import {Provider}from 'react-redux';
import {createStore} from 'redux';
// import Chat2 from './screens/index';
let store=createStore(reducer);

export default class App extends Component {
 render() {

   return (
     <Provider store={store}>
       <Chat/>
       {/* <Chat2/> */}
     </Provider>

   );
 }
}
index.js



/** @format */
import { Navigation } from "react-native-navigation";
import Chat from './screens/Chat'
import App from './App';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent(`Chat`, () => Chat);

Navigation.events().registerAppLaunchedListener(() => {
 Navigation.setRoot({
   root: {
     stack:{
       id:'AppStack',
       children:[{
         component:{
           name:'Chat',
           options:{
             topBar:{
               title:{
                 text:'채팅방'
               }
             }
           }
         }
       },
       {
         component: {
           name: "navigation.playground.WelcomeScreen",
           options:{
             topBar:{
               title:{
                 text:'메인화면'
               }
             }
           }
         }
       }]
     }
   }
 });
});
reducer.js



//Import
import update from 'react-addons-update';
import {Navigation} from 'react-native-navigation';

//Actions
const CHAT_CREATE='CHAT_CREATE';
const CHAT_DELETE='CHAT_DELETE';
const CHAT_ENTER='CHAT_ENTER';
const CHAT_NAME='Chat';
//Action Creators

function chatCreate(){
   return {
       type:CHAT_CREATE
   };
}
function chatDelete(){
   return{
       type:CHAT_DELETE
   };
}
function chatEnter(){
   return{
       type:CHAT_ENTER
   };
}

//Reducer

const initialState={
   value:1,
   data:[],
   textContent:[]
}

function reducer(state=initialState, action){
   switch(action.type){
       case CHAT_CREATE:
           return applyChatCreate(state);
       case CHAT_DELETE:
           return applyChatDelete(state);
       case CHAT_ENTER:
           return applyChatEnter(state);
       default:
           return state;
   }
}

//Reducer Functions
function applyChatCreate(state){
   console.log("state",state)
   let array=state.data
   array.push({name:'채팅방',id:state.value});
   return {
       ...state,
       value:state.value+1,
       data:array
   };
}
function applyChatDelete(state){
   let stateId=state.value;

   return{
       ...state,
       value:state.value-1,
       data:state.data.slice(0,state.value-2)
   }
}

function goToScreen(){
   Navigation.push('AppStack',{
       component:{
         name:'Chat',
         passProps: {
           test: "test"
       }
       },

     })
}
function applyChatEnter(state){
   console.log("Asdf");
   goToScreen();
   return {
       ...state,

   }
}
//Export Action Creators
const actionCreators={
   chatCreate,
   chatDelete,
   chatEnter
};

//Export Reducer
export default reducer;
export {actionCreators};