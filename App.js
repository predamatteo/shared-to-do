import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import MainScreen from './screens/MainScreen';
import { useContext, useEffect, useState } from 'react';
import AppContextProvider, { AppContext } from './store/context';
import { retrieveRoom } from './util/storage';
import AddRoom from './components/AddRoom';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
//import Controller from './components/Controller';
import supabase from './util/supabaseClient';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';



//const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {
  console.log(supabase.schema);
  return (
    <SafeAreaView style={{flex:1, marginTop:60}}>
      <StatusBar/>
      <AppContextProvider>
        <NavigationContainer>
        <KeyboardAvoidingView 
            style={{flex:1}} 
            behavior={Platform.OS === 'ios'? 'padding':'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? -64 : 0}>
          {/* <Stack.Navigator>
            <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown:false}}/>
            <Stack.Screen name='AddRoom' component={AddRoom} options={{headerShown:false}}/>
          </Stack.Navigator>
          */}
          <Drawer.Navigator>
            <Drawer.Screen name='MainScreen' component={MainScreen}/>
            <Drawer.Screen name='AddRoom' component={AddRoom} />
          </Drawer.Navigator>
          </KeyboardAvoidingView>
        </NavigationContainer>
      </AppContextProvider>
    </SafeAreaView>

  );
}
