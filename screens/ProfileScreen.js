import axios from 'axios';
import React , {useContext, useEffect, useState } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { Divider, Avatar, List, Button } from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';
const BASE_URL ="https://gssa-a7f27-default-rtdb.firebaseio.com";

const ProfileScreen= props =>{
    const authContext = useContext(AuthContext);
    const [mainUser, setMainUser] = useState('');
    useEffect(async ()=> {
        const response = await axios.get(`${BASE_URL}/users.json`)
        const users= response.data;
        setMainUser(users);
        
    },[])
    return( <View style={styles.home}>
            <View style={styles.curve}></View>
            <Avatar.Image size={100} style={styles.avatar} source={require('../assets/download.png')}  />
            
            <Button icon="earth-plus" color='#0F1113' style={styles.list} onPress={() => console.log('Pressed')} labelStyle={{fontSize: 29}}>   
            </Button>

            <Divider style={styles.divider}/>
            <ScrollView>
                <List.Item
                    title={mainUser.fullName}
                    left={props => <List.Icon {...props} icon="human-male" />}
                />
                <List.Item
                    title={authContext.authUser.email}
                    description="Item description"
                    right={props => <List.Icon {...props} icon="folder" />}
                />
                <List.Item
                    title="First Item"
                    description="Item description"
                    right={props => <List.Icon {...props} icon="folder" />}
                />
                <List.Item
                    title="First Item"
                    description="Item description"
                    right={props => <List.Icon {...props} icon="folder" />}
                />
                <List.Item
                    title="First Item"
                    description="Item description"
                    right={props => <List.Icon {...props} icon="folder" />}
                />
                 <List.Item
                    title="First Item"
                    description="Item description"
                    right={props => <List.Icon {...props} icon="folder" />}
                />
                 <List.Item
                    title="First Item"
                    description="Item description"
                    right={props => <List.Icon {...props} icon="folder" />}
                />
                 <List.Item
                    title="First Item"
                    description="Item description"
                    right={props => <List.Icon {...props} icon="folder" />}
                />
            </ScrollView>
            <Divider style={styles.divider}/>
            <Button icon="eye" color='#0F1113' onPress={() => {props.navigation.navigate('MyPost')}}>
                View My Post
            </Button>
            <Button icon="logout" color='#0F1113' onPress={() => {authContext.logOut()}}>
                LogOut
            </Button>
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
        position:'absolute',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,

    },
    avatar:{
        width:'100%',
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'transparent',
        paddingTop:30,
    },   
    divider:{
        backgroundColor:'#0F1113',
        height: 2,
        width:'92%',
        marginLeft: 15,
        marginBottom:5,
    },
    list:{
        alignItems: 'flex-end',
        width: '100%',
    },
    button:{
        fontFamily:'Ubuntu-Regular',
    }
});

export default ProfileScreen;