import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

const SplashScreen = props =>{
    return <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'#9f9fa0'}}>
            <ActivityIndicator animating={true} color="#0F1113" size="large" />
    </View>

}
 
export default SplashScreen;