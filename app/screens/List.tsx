import { View, Text, Button } from "react-native";
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import React from "react";
import { NavigationProp } from "@react-navigation/native";
interface RouterProps{
 navigation:NavigationProp<any,any>;
}
  const List =({navigation}:RouterProps) =>{
 return(
 <View style={{flex:1,justifyContent: 'center', alignItems:'center'}}>
                <Button onPress={() => navigation.navigate('Details')} title="Open details"/>
                   <Button onPress={()=>FIREBASE_AUTH.signOut()} title="Logout"/> 
  
 </View>
 );
  };
  export default List