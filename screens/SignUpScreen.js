import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const SignUpScreen= props =>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [conpassword, setConpassword] = React.useState('');
    const [fullName, setFullName] = React.useState('');
    const [dob, setDob] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [gitLink, setGitLink] = React.useState('');
    const [address, setAddress] = React.useState('');
    const authContext = useContext(AuthContext);
    const handleSignup=() => {
        authContext.signUpUserWithFirebase({email, password,conpassword, fullName, dob, phone, gitLink, address})
        props.navigation.navigate('Login')
    }

    return <View style={styles.home}>
        <View style={styles.login}>
        <TextInput
        style={styles.textinput}
        mode="outlined"
        label="Full Name"
        value={fullName}
        onChangeText={text=> setFullName(text)}
        right={<TextInput.Icon name="account-child-circle" />}
        autoCapitalize="words"
        />
       <TextInput
       style={styles.textinput}
       mode="outlined"
       label="Email"
       value={email}
       onChangeText={text => setEmail(text)}
       keyboardType='email-address'
       right={<TextInput.Icon name="mail" />}
       />
       <TextInput
       style={styles.textinput}
       label="Password"
       mode="outlined"
       value={password}
       onChangeText={text => setPassword(text)}
       secureTextEntry={true}
       right={<TextInput.Icon name="eye-off" />}
       />
       <TextInput
       style={styles.textinput}
       label="Confirm Password"
       mode="outlined"
       value={conpassword}
       onChangeText={text => setConpassword(text)}
       secureTextEntry={true}
       right={<TextInput.Icon name="eye-off" />}
       />
       <View style={styles.shorttext}>
        <Text style={styles.textinput}>Already Registered?</Text>
        <Button color="#0F1113" style={styles.textinput} onPress={()=> props.navigation.navigate("Login")}>Login</Button>
       </View>
       <Button mode="contained" color="#0F1113" onPress={handleSignup}>Register</Button>


    </View>
    </View>

}
 
const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'#9f9fa0',
    },
    login:{
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor:'#9f9fa0',
        
    },
    textinput:{
        paddingBottom: 5,
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