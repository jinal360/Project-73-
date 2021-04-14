import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';
import { Header } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator}from 'react-navigation-tabs';
import ReadStoryScreen from './screen/ReadStoryScreen';
import WriteStoryScreen from './screen/WriteStoryScreen';


export default class App extends React.Component {
  render(){
    return(
     <AppContainer/>
     

     )
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStoryScreen:{screen:ReadStoryScreen},
  WriteStoryScreen:{screen:WriteStoryScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "ReadStoryScreen"){
        return(
          <Image
          source={require("./assets/booklogo.jpg")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "WriteStoryScreen"){
        return(
          <Image
          source={require("./assets/book.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);


const AppContainer = createAppContainer(TabNavigator)


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'red',
  alignItems: 'center',
  justifyContent: 'center',
},
});