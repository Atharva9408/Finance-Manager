import * as React from 'react';
import { Text, View,SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class EMICalculator extends React.Component  {

  constructor(){
    super();
    this.state={
      loan:'',
      int:'',
      year:'',
      months:'',
      ans:'',
      tAmount:'',
      message:'',
      iconSize:0
    }
  }

  reset=()=>{
    this.setState({
      loan:'',
      int:'',
      year:'',
      months:'',
      ans:'',
      tAmount:'',
      message:'',
      iconSize:0
    })
  }

  calculate=()=>{
    if(this.state.loan==='' || this.state.int==='' || this.state.year===''){
      this.setState({iconSize:20});
      this.setState({message:'Fields cannot be empty!'});
    } 
    else {
    var loan=parseFloat(this.state.loan);
    var int=parseFloat(this.state.int);
    var finalInt=int/(12*100);
    var year=parseFloat(this.state.year);
    var yearInMonths=year*12;
    var months=parseFloat(this.state.months);
    var period=yearInMonths+months;

    var ans=parseFloat((loan * finalInt * Math.pow((1+finalInt),period))/ (( Math.pow((1+finalInt),period))-1)).toFixed(2);
        var tAmount=parseFloat(ans*period).toFixed(2);
    this.setState({
      ans:ans,
      tAmount:tAmount
    })
    }
    if(this.state.months===''){
      this.setState({months:-1+1})
    }
    if(this.state.loan>0 || this.state.int>0 || this.state.year>0){
      this.setState({iconSize:0, message:''})
      Alert.alert('Error', 'Enter all fields greater than 0')
    }
    if(this.state.loan===0 || this.state.int===0 || this.state.year===0){
      this.setState({iconSize:20, message:'Fields cannot be 0!'})
    }
  }

  render(){
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      <View style={styles.titleContainer}>
        <Ionicons 
        style={{alignSelf:'center'}} 
        name={"calculator"} 
        size={RFValue(30)} 
        color= "#1a1a1a"
        />
        <Text style={styles.title}>EMI</Text>
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
        name={"cash-outline"} 
        size={RFValue(30)} 
        color= "blue"
        />        
        <TextInput 
        placeholder={"Enter Loan Amount"}
        style={styles.textInput}
        keyboardType={"numeric"}
        value={this.state.loan}
        onChangeText={loan=>
        this.setState({
          loan
        })} 
        /> 
        </View> 

        <View style={styles.textWithIcon}>
        <Ionicons
          style={{alignSelf:'center'}}
          name={"cellular"}
          size={RFValue(30)}
          color="blue"
          />
        <TextInput
        placeholder={"Enter Interest %"}
        style={styles.textInput}
        keyboardType={"numeric"}
        value={this.state.int}
        onChangeText={int=>
        this.setState({
          int
        })}
        />
        </View>

        <Text style={styles.text}>Time/ Period</Text>

        <View style={styles.period}>

          <TextInput
          placeholder={"Year"}
          style={styles.textInputperiod}
          keyboardType={"numeric"}
          value={this.state.year}
          onChangeText={year=>
          this.setState({
            year
          })}
          />
          <Ionicons
          style={{alignSelf:'center'}}
          name={"calendar"}
          size={RFValue(30)}
          color="blue"
          />
          <TextInput
          placeholder={"Months"}
        style={styles.textInputperiod}
        keyboardType={"numeric"}
        value={this.state.months}
        onChangeText={months=>
        this.setState({
          months
        })}
          />

        </View>
        <View style={styles.textWithIcon}>
          <Ionicons
            name={"alert-circle-outline"}
            size={this.state.iconSize}
            color="red"
          />
          <Text style={{color:'red', margin:0, fontWeight:'normal'}}>{this.state.message}</Text>
        </View>
        <Text style={styles.text}>Monthly EMI:</Text>
        <Text style={styles.text}>{this.state.ans}</Text>
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
  period:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center'
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
  textInputperiod:{
    width: RFValue(112),
    height:RFValue(40),
    borderBottomWidth:3,
    borderBottomColor:'#00b3b3',
    alignSelf:'center',
    padding:RFValue(5),
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
    marginLeft:RFValue(140)
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
  textWithIcon:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center'
  }
});
