import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const SignUpScreen= props =>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [fullName, setFullName] = React.useState('');
    const authContext = useContext(AuthContext);
    const handleSignup=() => {
        authContext.signUpUserWithFirebase({email, password, fullName})
        props.navigation.navigate('Login')
    }

    return <View style={styles.login}>
        <TextInput
        style={styles.textinput}
        mode="outlined"
        label="Full Name"
        value={fullName}
        onChangeText={text=> setFullName(text)}
        />
       <TextInput
       style={styles.textinput}
       mode="outlined"
       label="Email"
       value={email}
       onChangeText={text => setEmail(text)}
       keyboardType='email-address'
       />
       <TextInput
       style={styles.textinput}
       label="Password"
       mode="outlined"
       value={password}
       onChangeText={text => setPassword(text)}
       secureTextEntry={true}
       
       />
       <View style={styles.shorttext}>
        <Text style={styles.textinput}>Already Registered?</Text>
        <Button color="#0F1113" style={styles.textinput} onPress={()=> props.navigation.navigate("Login")}>Login</Button>
       </View>
       <Button mode="contained" color="#0F1113" onPress={handleSignup}>Register</Button>


    </View>

}
 
const styles = StyleSheet.create({
    login:{
        marginHorizontal: 20,
        marginVertical: 30,
        
    },
    textinput:{
        paddingBottom: 20,
        fontFamily: 'Ubuntu-Regular',
        
    },
    shorttext:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    
    button:{
        color: '#0F1113',
        fontFamily: 'Ubuntu-Regular',
    }
});

export default SignUpScreen;