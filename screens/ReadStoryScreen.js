import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default class ReadStory extends React.Component {
    
render(){
  return(
    <View style={styles.container}>
      <Text>Read Story</Text>
    </View>
  );
}
  
    }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    
  });