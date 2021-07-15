/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Homescreen';
import CourseScreen from './components/CourseScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialIcons.loadFont();

const Stack = createStackNavigator();

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title: null, headerStyle: {elevation: 0}}}>
        <Stack.Screen
        name="HomeScreen"
        component = {HomeScreen}
        options={{
          headerLeft: () => (
          <MaterialIcons 
          name="sort" 
          size={25}
          style={{marginLeft: 20}}
          />
          ),
          headerRight: () => (
          <Image 
          style={{height:40,width:40,marginRight:20}}
          source={require('./assets/images/person.png')}/>
          ),
        }}
        ></Stack.Screen>

<Stack.Screen
          name="CourseScreen"
          options={({navigation}) => ({
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}>
                <MaterialIcons
                  name="arrow-back-ios"
                  size={25}
                  style={{marginLeft: 20}}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <MaterialIcons name="more-vert" size={25} style={{marginRight: 20}} />
            ),
          })}
          component={CourseScreen}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
