import React , {useContext} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { Divider, Avatar, List, Button } from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';


const ProfileScreen= props =>{
    const authContext = useContext(AuthContext);
    return( <View style={{flex:1, }}>
            <Avatar.Image size={100} style={styles.avatar} source={require('../assets/download.png')}  />
            
            <Button icon="earth-plus" color='#0F1113' style={styles.list} onPress={() => console.log('Pressed')} labelStyle={{fontSize: 29}}>   
            </Button>

            <Divider style={styles.divider}/>
            <ScrollView>
                <List.Item
                    title={authContext.authUser.fullName}
                    email={authContext.authUser.email}
                    left={props => <List.Icon {...props} icon="human-male" />}
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