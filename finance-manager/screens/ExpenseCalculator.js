import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Platform, SafeAreaView, StatusBar } from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class ExpenseCalculator extends React.Component  {

  constructor(){
    super();
    this.state={
      income:'',
      expense:'',
      ans:''
    }
  }

  calculate=()=>{
    var income=this.state.income;
    var expense=this.state.expense;
    var ans=income-expense;
    this.setState({
      ans:ans
    })
  }

  reset=()=>{
    this.setState({
      income:'',
      expense:'',
      ans:''
    })
  }

  render(){
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.androidSafeArea}/>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Expense Calculator</Text>
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
        name={"wallet"} 
        size={RFValue(30)} 
        color= "blue"
        />
        <TextInput
        placeholder={"Enter Income"}
        style={styles.textInput}
        keyboardType={"numeric"}
        value={this.state.income}
        onChangeText={income=>
        this.setState({
          income
        })}
        />
        </View>

        <View style={styles.textWithIcon}>
        <Ionicons 
        style={{alignSelf:'center'}} 
        name={"trending-down"} 
        size={RFValue(30)} 
        color= "blue"
        />
        <TextInput
        placeholder={"Enter Expense"}
        style={styles.textInput}
        keyboardType={"numeric"}
        value={this.state.expense}
        onChangeText={expense=>
        this.setState({
          expense
        })}
        />
        </View>
        <Text style={styles.text}>{this.state.ans}</Text>

        <View style={styles.calculateReset}>
        <TouchableOpacity 
        style={styles.button}
        onPress={this.calculate}
        >
          <Text style={styles.text}>Calculate</Text>
        </TouchableOpacity>
        </View>
      </View>
  );
}
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:"#80ffff"
  },
    androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  titleContainer:{
      backgroundColor:'#00e0e0',
      display:'flex',
      flexDirection:'row',
      alignContent:'space-evenly'
  },
  calculateReset:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center'
  },
  title:{
    fontWeight: 'bold',
    fontSize:RFValue(18),
    margin:RFValue(15)
  },
    textInput:{
    width: RFValue(275),
    height:RFValue(40),
    borderBottomWidth:3,
    borderBottomColor:'#00b3b3',
    alignSelf:'center',
    padding:5,
    margin:RFValue(15),
  },
    text:{
    alignSelf:'center',
    fontWeight: 'bold',
    margin:RFValue(10)
  },
  smallButton:{
    borderRadius:RFValue(20),
    width:RFValue(40),
    height:RFValue(40),
    marginTop:RFValue(10),
    marginLeft:RFValue(100)
  },
  button:{
    borderWidth:1,
    borderRadius:RFValue(20),
    width:RFValue(150),
    height:RFValue(40),
    alignSelf:'center',
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:'#00e0e0',
    margin:5
  },
    textWithIcon:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center'
  }
});
