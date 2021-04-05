import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const LoginScreen= props =>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const authContext = useContext(AuthContext);

    return <View style={styles.home}>
        <View style={styles.login}>
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
        {authContext.errorMessage !== '' && <Text style ={{color:'red'}}>{authContext.errorMessage}</Text>}
       <View style={styles.shorttext}>
        <Text style={styles.textinput}>Not Registered yet?</Text>
        <Button color="#0F1113" style={styles.textinput} onPress={()=> props.navigation.navigate("SignUp")}>Sign Up</Button>
       </View>
       <Button mode="contained" color="#0F1113" onPress={()=> authContext.loginUserWithFirebase(email, password)}>Login</Button>

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

export default LoginScreen;