import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { Divider, Button, TextInput } from 'react-native-paper';
const BASE_URL ="https://gssa-a7f27-default-rtdb.firebaseio.com";
import AuthContext from '../store/contexts/AuthContext';

const EditProfile= props =>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [conpassword, setConpassword] = React.useState('');
    const [fullName, setFullName] = React.useState('');
    const [dob, setDob] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [gitLink, setGitLink] = React.useState('');
    const [address, setAddress] = React.useState('');
    const authContext = React.useContext(AuthContext);
    const todoSubmit =() => {
        authContext.updateUserWithFirebase({email, password, conpassword, fullName, dob, phone, gitLink, address})
        props.navigation.navigate('Profile')
    }
    return (
        <View style={styles.home}>
        <View style={styles.curve}></View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{fontFamily:"Ubuntu-Bold", fontSize: 25, paddingLeft:120}}>Edit Profile</Text>
            <Divider style={styles.divider}/>
            <View style={styles.textBox}>
            <TextInput
                style={styles.inputbox}
                mode="flat"
                label="Full Name"
                value={fullName}
                onChangeText={text => setFullName(text)}
                right={<TextInput.Icon name="text-box-plus"/>}
                autoCapitalize="words"
            />
            <TextInput
                style={styles.inputbox}
                mode="flat"
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                right={<TextInput.Icon name="text-box-plus"/>}
                disabled={true}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.inputbox}
                mode="flat"
                label="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                right={<TextInput.Icon name="text-box-plus"/>}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.inputbox}
                mode="flat"
                label="Confirm Password"
                value={conpassword}
                onChangeText={text => setConpassword(text)}
                right={<TextInput.Icon name="text-box-plus"/>}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.inputbox}
                mode="flat"
                label="Address"
                value={address}
                onChangeText={text => setAddress(text)}
                right={<TextInput.Icon name="text-box-plus"/>}
                autoCapitalize="words"
            />
            <TextInput
                style={styles.inputbox}
                mode="flat"
                label="Phone Number"
                value={phone}
                onChangeText={text => setPhone(text)}
                right={<TextInput.Icon name="text-box-plus"/>}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.inputbox}
                mode="flat"
                label="Date of Birth"
                value={dob}
                onChangeText={text => setDob(text)}
                right={<TextInput.Icon name="text-box-plus"/>}
                keyboardType="number-pad"
            />
            <TextInput
                style={styles.inputbox}
                mode="flat"
                label="Git link"
                value={gitLink}
                onChangeText={text => setGitLink(text)}
                right={<TextInput.Icon name="text-box-plus"/>}
                keyboardType="url"
            />

            </View>
            <Button mode="contained" color="#0F1113" style={styles.button} icon="post" onPress={todoSubmit}>Save</Button>
            <Button mode="contained" color="#0F1113" style={styles.button} icon ="cancel" onPress={()=> props.navigation.navigate("Profile")}>Cancel</Button>
            </ScrollView>

        </View>
    )

}
 
const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'#9f9fa0',
    },
    curve:{
        height: 70,
        width:'100%',
        backgroundColor:'#0f1113',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,

    },
    textBox:{
        marginHorizontal:20,
        marginVertical:10,
    },
    divider:{
        backgroundColor:'#0F1113',
        height: 2,
        width:'92%',
        marginLeft: 15,
        marginBottom:5,
    },
    inputbox:{
        marginBottom:5,
    },
    button:{
        marginHorizontal:20,
        marginVertical:5,
    },
});

export default EditProfile;