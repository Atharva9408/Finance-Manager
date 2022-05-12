import * as React from 'react';
import { Text, View,Button, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class CurrencyConverter extends React.Component  {
constructor(){
    super();
    this.state={
      from1:'',
      to:'',
      selectedItemFrom:'',
      selectedItemTo:'',
      answer:0,
      amount:''
    }
  }

  api=async()=>{
    var from1=this.state.selectedItemFrom;
    var to=this.state.selectedItemTo;
    var amount=this.state.amount;
    console.log(from1);
    console.log(to)
    var myHeaders = new Headers();
        myHeaders.append("apikey", "7fK5vVtglWoNWSRk9DsJjppnJP6Srbge");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    const resp =await fetch("https://api.apilayer.com/fixer/convert?to="+to+"&from="+from1+"&amount="+amount+"", requestOptions)
    const data = await resp.json();
    console.log(data.result);
    this.setState({answer:data.result})
    
    }
    
  render(){
    return (
      <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Currency Converter</Text>
      </View>
             
        <Text style={[styles.text,{    marginTop:RFValue(40), marginLeft:RFValue(10)}]}>FROM</Text>
        <View style={styles.alignBoth}>
          <TextInput 
            onChangeText={text=>this.setState({from:text})} 
            placeholder={"Amount"} 
            style={styles.textInput} 
            value={this.state.from}
          />

          <DropDownPicker
            items={[
                {label: 'USD', value: 'USD'},
                {label: 'INR', value: 'INR'},
            ]}
            defaultValue="Select Currency"
            containerStyle={{height: 40}}
            style={styles.dropDown}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => this.setState({selectedItemFrom:item.label})}
            dropDownMaxHeight={240}
          />
        </View>

<TouchableOpacity style={[styles.button, {marginTop:RFValue(0)}]} onPress={this.api}>
  <Text style={styles.text}>Convert</Text>
</TouchableOpacity>

 <Text style={[styles.text,{marginTop:RFValue(40), marginLeft:RFValue(10), marginBottom:RFValue(20)}]}>TO</Text>
         <DropDownPicker
    items={[
         {label: 'USD', value: 'USD'},
        {label: 'INR', value: 'INR'},
    ]}
    defaultValue="Select Currency"
    containerStyle={{height: 40}}
    style={styles.dropDown2}
    dropDownStyle={{backgroundColor: '#fafafa', width:RFValue(330), alignSelf:'center'}}
    onChangeItem={item => this.setState({selectedItemTo:item.label})}
    dropDownMaxHeight={240}
/>
<Text>{this.result}</Text>


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
      backgroundColor:'#00e0e0'
  },
  title:{
    fontWeight: 'bold',
    fontSize:RFValue(18),
    margin:RFValue(15)
  },
  dropDown:{
    width:RFValue(150),
  },
  dropDown2:{
    width:RFValue(330),
    height:RFValue(40),
    alignSelf:'center',
  },
  alignBoth:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
    marginBottom:RFValue(100),
    marginTop:RFValue(20)
  },
    textInput:{
    width: RFValue(150),
    height:RFValue(40),
    borderBottomWidth:3,
    borderBottomColor:'#00b3b3',
    alignSelf:'center',
    padding:5,
    marginRight:RFValue(10)
  },
    button:{
    borderWidth:1,
    borderRadius:RFValue(20),
    width:RFValue(150),
    height:RFValue(40),
    alignSelf:'center',
    textAlign:'center',
    backgroundColor:'#00e0e0',
  },
    text:{
    alignSelf:'left',
    fontWeight: 'bold',
    marginTop:RFValue(10),
  },
});

