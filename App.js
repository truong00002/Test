import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import onboarding1 from './src/screens/onboarding1';
import onboarding2 from './src/screens/onboarding2';
import signin from './src/screens/signin';
import signup from './src/screens/signup';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/screens/home';
import market from './src/screens/market';
import profile from './src/screens/profile';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#44DE86', }}>
          <Tab.Screen name="Home" component={home}
            options={{
              tabBarIcon: () => (
                <AntDesign
                  name='home'
                  size={18}
                  color='#000'
                />
              ),
            }} />
          <Tab.Screen name="Profile" component={profile}
            options={{
              tabBarIcon: () => (
                <AntDesign
                  name='user'
                  size={18}
                  color='#000'
                />
              ),
            }} />
          <Tab.Screen name="Market" component={market}
            options={{
              tabBarIcon: () => (
                <AntDesign
                  name='shoppingcart'
                  size={18}
                  color='#000'
                />
              ),
            }} />
          <Tab.Screen name="Login" component={onboarding1}
            options={{
              tabBarIcon: () => (
                <AntDesign
                  name='home'
                  size={18}
                  color='#000'
                />
              ),
            }} />
          <Tab.Screen name="on2" component={onboarding2}
            options={{
              tabBarIcon: () => (
                <AntDesign
                  name='home'
                  size={18}
                  color='#000'
                />
              ),
            }} />
          <Tab.Screen name="signin" component={signin}
            options={{
              tabBarIcon: () => (
                <AntDesign
                  name='home'
                  size={18}
                  color='#000'
                />
              ),
            }} />
          <Tab.Screen name="signup" component={signup}
            options={{
              tabBarIcon: () => (
                <AntDesign
                  name='home'
                  size={18}
                  color='#000'
                />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}