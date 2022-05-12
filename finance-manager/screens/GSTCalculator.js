import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class GSTCalculator extends React.Component  {

  constructor(){
    super();
    this.state={
      iAmount:'',
      tAmount:'',
      rgst:'',
      agst:'',
    }
  }

  calculate=()=>{
    var iAmount=parseFloat(this.state.iAmount);
    console.log(iAmount)
    var rgst=parseFloat(this.state.rgst);
    var agst=(iAmount*rgst)/100;
    
    var tAmount=agst+iAmount
    this.setState({
      agst:agst,
      tAmount:tAmount
    })
  }

  reset=()=>{
    this.setState({
      iAmount:'',
      tAmount:'',
      rgst:'',
      agst:''
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>GST Calculator</Text>
          <TouchableOpacity 
        style={styles.smallButton}
        onPress={this.reset}
        >
          <Ionicons 
        style={{alignSelf:'center'}} 
        name={"sync"} 
        size={RFValue(30)} 
        color= "blue"
        />
        </TouchableOpacity>
        </View>

        <View style={styles.textWithIcon}>
        <Ionicons 
        style={{alignSelf:'center'}} 
        name={"reader"} 
        size={RFValue(30)} 
        color= "blue"
        />
        <TextInput
        placeholder={"Enter Initial Amount"}
        style={styles.textInput}
        keyboardType={"numeric"}
        value={this.state.iAmount}
        onChangeText={iAmount=>
        this.setState({
          iAmount
        })}
        />
        </View>

        <View style={styles.textWithIcon}>
        <Ionicons 
        style={{alignSelf:'center'}} 
        name={"analytics"} 
        size={RFValue(30)} 
        color= "blue"
        />
        <TextInput
        placeholder={"Enter Rate of GST"}
        style={styles.textInput}
        keyboardType={"numeric"}
        value={this.state.rgst}
        onChangeText={rgst=>
        this.setState({
          rgst
        })}
        />
        </View>

        <Text style={styles.text}>Amount of GST:</Text>
        <Text style={styles.text}>{this.state.agst}</Text>
        <Text style={styles.text}>Total Amount:</Text>
        <Text style={styles.text}>{this.state.tAmount}</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={this.calculate}
        >
          <Text style={styles.text}>Calculate</Text>
        </TouchableOpacity>
        </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#80ffff"
  },
  titleContainer:{
      backgroundColor:'#00e0e0',
      display:'flex',
      flexDirection:'row',
      alignContent:'space-evenly'
  },
  title:{
    fontWeight: 'bold',
    fontSize:RFValue(18),
    margin:RFValue(15)
  },
    textInput:{
    width: RFValue(250),
    height:RFValue(40),
    borderBottomWidth:3,
    borderBottomColor:'#00b3b3',
    alignSelf:'center',
    padding:5,
    margin:RFValue(15),
  },
  smallButton:{
    borderRadius:RFValue(20),
    width:RFValue(40),
    height:RFValue(40),
    marginTop:RFValue(10),
    marginLeft:RFValue(145)
  },
    button:{
    borderWidth:1,
    borderRadius:RFValue(20),
    width:RFValue(150),
    height:RFValue(40),
    alignSelf:'center',
    alignItems:'center',
    textAlign:'center',
    backgroundColor:'#00e0e0'
  },
    text:{
    alignSelf:'center',
    fontWeight: 'bold',
    margin:RFValue(10)
  },
      textWithIcon:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center'
  }
});
