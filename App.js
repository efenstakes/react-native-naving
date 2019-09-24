import React, {Fragment} from 'react';
import { View, Text, Linking } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import { IconButton, Button, Colors, Chip, Card, Avatar, Paragraph, Title } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'


/**
 * ISSUES
 * 
 * 1. Remove the back button from the headers
 * 2. Also show how to completely remove the header incase i need to do so
 * 3. how to space the bottom navigation items - they are all at the middle in tablets
 * 
 * 
 * 
 */


// splash screen page
class SplashScreenActivity extends React.Component {


  render() {
    let { navigation } = this.props
    return (
      <View>
        
        <Paragraph> Spplash screen page </Paragraph>
        <Button mode="contained" dark={true} uppercase={false} onPress={ ()=> { navigation.navigate('AppHome') } } > Go To App Home </Button>

      </View>
    )
  }// render() { .. }

}


// tutorial page
class TutorialActivity extends React.Component {
  
  render() {
    return (
      <View>
        
        <Paragraph> TutorialAcivity screen page </Paragraph>

      </View>
    )
  }// render() { .. }

}



// home  
class HomeActivity extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
      <View>
        
        <Paragraph> home screen page </Paragraph>

        <Button mode="contained" onPress={ ()=> this.props.navigation.navigate('Book') }> Book </Button>

      </View>
    )
  }// render() { .. }

}
   
// my-bookings
class MyBookingsActivity extends React.Component {
  
  
  render() {
    return (
      <View>
        
        <Paragraph> my-bookings screen page </Paragraph>

      </View>
    )
  }// render() { .. }

} 
  
// faq
class FaqActivity extends React.Component {
  
  
  render() {
    return (
      <View>
        
        <Paragraph> faq screen page </Paragraph>

      </View>
    )
  }// render() { .. }

} 

// talk to us
class TalkToUsActivity extends React.Component {
  
  
  render() {
    return (
      <View>
        
        <Paragraph> talk to us screen page </Paragraph>

      </View>
    )
  }// render() { .. }

} 


// Instruction
class InstructionActivity extends React.Component {
  
  
  render() {
    return (
      <View>
        
        <Paragraph> Instruction screen page </Paragraph>

      </View>
    )
  }// render() { .. }

} 


// book
class BookingActivity extends React.Component {
  
  
  render() {
    return (
      <View>
        
        <Paragraph> Booking screen page </Paragraph>

      </View>
    )
  }// render() { .. }

} 


// create the app bottom navigation
const BottomTabNav = createMaterialBottomTabNavigator({
    
    Home: { 
      screen: HomeActivity, 

      navigationOptions:{
        header: null,  
        tabBarLabel:'Home',  
        tabBarIcon:({tintColor})=>(  
          <View>
            <Icon name="home" color={tintColor} size={25}/>  
          </View>
        )  
      } 
      
    }, // Home: { ..

    MyBookings: { 
      screen: MyBookingsActivity, 

      navigationOptions:{
        header: null,  
        tabBarLabel:'My Bookings',  
        tabBarIcon:({tintColor})=>(  
          <View>
            <Icon name="list" color={tintColor} size={25}/>  
          </View>
        )  
      } 

    }, // MyBookings: { .. 

    Faq: { 
      screen: FaqActivity, 

      navigationOptions:{
        header: null,  
        tabBarLabel:'Faq',  
        tabBarIcon:({tintColor})=>(  
          <View>
            <Icon name="info-circle" color={tintColor} size={25}/>  
          </View>
        )  
      } 

    }, // Faq: { ..

    TalkToUs: { 
      screen: TalkToUsActivity, 

      navigationOptions:{
        header: null,  
        tabBarLabel:'Talk To Us',  
        tabBarIcon:({tintColor})=>(  
          <View>
            <Icon name="phone" color={tintColor} size={25}/>  
          </View>
        )  
      } 

    }// TalkToUs: { .. }

  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },

    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
    
  }
)

// create the app wide navigator
const AppNavigator = createStackNavigator({

    Splash: {
      screen: SplashScreenActivity, navigationOptions: { title: 'Splash Page' }
    },

    Tutorial: {
      screen: TutorialActivity, navigationOptions: { title: 'Tutorial' }
    },

    Book: {
      screen: BookingActivity, navigationOptions: { title: 'Book' }
    },

    AppHome: BottomTabNav

  }, 
  { 
    initialRouteName: 'Splash',
    defaultNavigationOptions: {

      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }

    } 
})
// use above config to create app component with the set routing configurations
const AppContainer = createAppContainer(AppNavigator)

const App = () => {
  return( 
    <PaperProvider>
      <AppContainer/>
    </PaperProvider> 
  )
}

export default App;
