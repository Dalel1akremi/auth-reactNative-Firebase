import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import React,{useState,useEffect} from 'react';
import {FIREBASE_AUTH} from './FirebaseConfig';
import {User,onAuthStateChanged } from 'firebase/auth';
const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
function InsideLayout(){
  return(
    <InsideStack.Navigator >
    <InsideStack.Screen name="My todos" component={List}  />
    <InsideStack.Screen name="Details" component={Details}  />
  </InsideStack.Navigator>
  )
}
export default function App() {
  const[user,setUser]= useState <User | null>(null);
 useEffect(()=>{
  onAuthStateChanged(FIREBASE_AUTH,(user)=>{
    console.log('user',user);
    setUser(user); 
   });

},[]);
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user?(
        <Stack.Screen name="Inside" component={InsideLayout} options={{headerShown:true}} />
        ):(
       <Stack.Screen name="login" component={Login} options={{headerShown:false}} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
