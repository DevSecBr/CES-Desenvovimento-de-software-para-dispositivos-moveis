import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginPage from '../screens/LoginPageSreen';
import RegisterPage from '../screens/RegisterPage';
import DashboardPage from '../screens/DashboardPage';
import EventsListPage from '../screens/EventsListPage ';
import EventDetailsPage from '../screens/EventDetailsPage';
import CreateEditEventPage from '../screens/CreateEditEventPage';
import CompaniesListPage from '../screens/CompaniesListPage';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardPage} options={{headerShown: false}} />
      <Stack.Screen name="EventsList" component={EventsListPage} options={{headerShown: false}}/>
      <Stack.Screen name="EventDetails" component={EventDetailsPage} options={{ headerShown: false }} />
      <Stack.Screen name="CreateEditEvent" component={CreateEditEventPage} options={{ headerShown: false }} />
      <Stack.Screen name="CompaniesList" component={CompaniesListPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
