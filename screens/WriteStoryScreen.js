import React from 'react';
import { Text, View ,TextInput,StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class WriteScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search</Text>
          <TextInput style={styles.inputBox}
      onChangeText={(text)=>{
        this.setState({text:text})
      }}
value={this.state.text}
      />
       <TextInput style={styles.inputBox2}
      onChangeText={(text)=>{
        this.setState({text:text})
      }}
value={this.state.text}
      />

<TextInput style={styles.inputBox3}
      onChangeText={(text)=>{
        this.setState({text:text})
      }}
value={this.state.text}
      />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
   
    inputBox:{
      marginTop:200,
      width:"80%",
      alignSelf:"center",
      height:40,
      textAlign:"center",
      boderWidth:4,
      outline:"none",
      backgroundColor:"yellow"
   },
     
   inputBox2:{
     marginTop:200,
     width:"80%",
     alignSelf:"center",
     height:40,
     boderWidth:4,
     outline:"none",
     backgroundColor:"yellow"
   },

   inputBox3:{
    marginTop:200,
    width:"80%",
    alignSelf:"center",
    height:90,
    boderWidth:4,
    outline:"none",
    backgroundColor:"yellow"
  },

  });