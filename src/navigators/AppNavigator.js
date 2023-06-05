import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginPage from '../screens/LoginPageSreen';
import RegisterPage from '../screens/RegisterPage';
import DashboardPage from '../screens/DashboardPage';
import EventsListPage from '../screens/EventsListPage ';
import MyEventsListPage from '../screens/MyEventsListPage';
import MyEventDetailsPage from '../screens/MyEventDetailsPage';
import ForgotPasswordPage from '../screens/ForgotPasswordPage';
import CreateEventPage from '../screens/CreateEventPage';



const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardPage} options={{headerShown: false}} />
      <Stack.Screen name="EventsList" component={EventsListPage} options={{headerShown: false}}/>
      <Stack.Screen name="MyEventsList" component={MyEventsListPage} options={{headerShown: false}}/>
      <Stack.Screen name="MyEventDetails" component={MyEventDetailsPage} options={{headerShown: false}}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} options={{headerShown: false}}/>
      <Stack.Screen name="CreateEvent" component={CreateEventPage} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
