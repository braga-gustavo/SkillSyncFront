// src/navigation/AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import ServiceRequestScreen from '../screens/ServiceRequestScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ServiceRequest: ServiceRequestScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
