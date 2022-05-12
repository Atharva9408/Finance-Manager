import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class HomeScreen extends React.Component  {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Home</Text>
        </View>
        <View style={styles.alignButton}>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate("EMI Calculator")
        }}
        >
          <Text style={styles.ans}>EMI</Text>
          <Ionicons 
        style={{alignSelf:'center', marginTop:RFValue(10)}} 
        name={"calculator"} 
        size={RFValue(40)} 
        color= "#1a1a1a"
        />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate("Expense Calculator")
        }}>
          <Text style={styles.ans}>Expense</Text>
          <Ionicons 
        style={{alignSelf:'center', marginTop:RFValue(10)}} 
        name={"wallet"} 
        size={RFValue(40)} 
        color= "#1a1a1a"
        />
        </TouchableOpacity>
        </View>
        <View style={styles.alignButton}>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate("GST Calculator")
        }}>
          <Text style={styles.ans}>GST</Text>
          <Ionicons 
        style={{alignSelf:'center', marginTop:RFValue(10)}} 
        name={"document-text"} 
        size={RFValue(40)} 
        color= "#1a1a1a"
        />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
          this.props.navigation.navigate("Currency Converter")
        }}>
          <Text style={styles.ans}>Currency Converter</Text>
          <Ionicons 
        style={{alignSelf:'center', marginTop:RFValue(-8)}} 
        name={"logo-usd"} 
        size={RFValue(40)} 
        color= "#1a1a1a"
        />
        </TouchableOpacity>
        </View>
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#4dffff"
  },
  alignButton:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center'
  },
  button:{
    borderWidth:RFValue(3),
    borderRadius:RFValue(25),
    marginTop:RFValue(40),
    marginLeft:RFValue(20),
    marginRight:RFValue(20),
    width:RFValue(125),
    height:RFValue(120),
    alignSelf:'center',
    alignItems:'center',
    textAlign:'center',
    backgroundColor:'#00ace6',
    shadowColor: "#0099cc",
    shadowOffset: {
      width: 10,
      height: 3
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 1
  },
  titleContainer:{
      backgroundColor:'#00e0e0',
  },
  title:{
    fontWeight: 'bold',
    fontSize:RFValue(18),
    margin:RFValue(15)
  },
    ans:{
    alignSelf:'center',
    fontWeight: 'bold',
    margin:RFValue(10)
  },
  }
);
