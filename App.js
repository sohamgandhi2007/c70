import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStory from './screens/ReadStoryScreen';
import WriteScreen from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: {screen: ReadStory},
  WriteStory: {screen: WriteScreen},
},
{
  defaultNavigationOptions:(
    {navigation})=>({
      tabBarIcon:({})=>{
        const routename= navigation.state.routeName
      if (routename === "ReadStory") {
        return(
          <Image
           source={require("./assets/read.png")}
           style={{width:40,height:40}}
          />
        )
      }
      else  if (routename === "WriteScreen") {
        return(
          <Image
           source={require("./assets/write.png")}
           style={{width:40,height:40}}
          />
        )
      }
      }
    })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});