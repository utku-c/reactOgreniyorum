/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

/*import type {Node} from 'react';*/

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import { HeaderTitle } from 'react-navigation-stack';
import ItemList from './ItemList';



export default class App extends Component {
  
    constructor(){
      super();
      this.state = {
        text:'',
        data:[]
      }
    }

  handleSave = () => {
    const {text,data} = this.state;
    data.push({text});
    this.setState({data,text:''});

    /*console.log(this.state.data); consol ekrana yazdırma debug ile */

  };

  render(){
    const {text, data} = this.state;
    return(
      <View style={[{flex:1,paddingTop:30}]}>
        <View style={style.title}>
          <Text style={style.title_text}>
            TO-DO UYGULAMASI
          </Text>
        </View>
        <View style={{backgroundColor:'#ccc',padding:10,flexDirection:'row'}}>
          <TextInput 
            style={style.input}
            value={text} 
            onChangeText={(text) => this.setState({text})}
          />

          <TouchableOpacity onPress={this.handleSave} style={style.button}>
            <Text style={style.title_text2}>
              EKLE
            </Text>
          </TouchableOpacity>
        </View>
        <View>
        </View>
          {data.map((item) => {
            return <ItemList text={item.text}></ItemList>
          })
          }
        </View>
    )
  }
}

const style = StyleSheet.create({

  title:{backgroundColor:'red',marginBottom:10},
  title_text:{color:'white',textAlign:'center',fontSize:24,fontWeight:'700',paddingBottom:8},
  title_text2:{color:'white',textAlign:'center',fontSize:18,fontWeight:'700'},
  input:{padding:10,backgroundColor:'white',flex:1},
  button:{padding:10,backgroundColor:'blue',borderRadius:8,marginLeft:10}
});