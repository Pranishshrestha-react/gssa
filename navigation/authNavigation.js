import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
    return <AuthStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#0F1113',
        },
        headerTintColor:'#cfcfcf',
        headerTitleStyle:{
            fontFamily:'Ubuntu-Bold'
        },
        headerBackTitleStyle:{
            fontFamily:'Ubuntu-Bold'
        }
    }}>
        <AuthStack.Screen name="Login" component = {LoginScreen}/>
        <AuthStack.Screen name="SignUp" component = {SignUpScreen}/>
    </AuthStack.Navigator>
    
}
export default AuthStackNavigator;