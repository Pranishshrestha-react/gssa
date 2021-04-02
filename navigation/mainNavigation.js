import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator}  from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AllTodoScreen from '../screens/AllTodoScreen';
import Icon from 'react-native-vector-icons/Ionicons'; 
import PostScreen from '../screens/PostScreen';
import AddPostScreen from '../screens/AddPostScreen';
import MyPostScreen from '../screens/MyPostScreen';
import EditPostScreen from '../screens/EditPostScreen';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AllTodoStack = createStackNavigator();
const MainTabNav = createBottomTabNavigator();
const addPost = () => {
    console.log('add new post')
    navigation.navigate('AddPost')
}

const HomeStackNavigator =(navigation) => {
    return <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#0F1113',
        },
        headerTintColor:'#cfcfcf',
        headerTitleStyle:{
            fontFamily: 'Ubuntu-Bold'
        },
        headerBackTitleStyle:{
            fontFamily:'Ubuntu-Bold'
        }
    }}>
        <HomeStack.Screen name="Home" component = { HomeScreen} options={({navigation}) => ({
            headerRight: props => (
                <Icon name="add" size={32} color='#cfcfcf' onPress = {()=> navigation.navigate('AddPost')}/>
            )
        })} />
        <HomeStack.Screen name="Post" component = { PostScreen}/>
        <HomeStack.Screen name="AddPost" component={ AddPostScreen}/>
        
    </HomeStack.Navigator>
}
const ProfileStackNavigator =() => {
    return <ProfileStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#0F1113',
        },
        headerTintColor:'#cfcfcf',
        headerTitleStyle:{
            fontFamily: 'Ubuntu-Bold'
        },
        headerBackTitleStyle:{
            fontFamily:'Ubuntu-Bold'
        }
    }}>
        <ProfileStack.Screen name="Profile" component = { ProfileScreen}/>
        <ProfileStack.Screen name="MyPost" component={MyPostScreen} options={({navigation})=> ({
            headerRight: props =>(
                <Icon name="cut" size={32} color='#cfcfcf' onPress = {()=> navigation.navigate('EditPost')}/>
            )
        })}/>
        <ProfileStack.Screen name="EditPost" component={EditPostScreen}/>
        <ProfileStack.Screen name="Post" component = { PostScreen}/>
    </ProfileStack.Navigator>
}
const AllTodoStackNavigator =() => {
    return <AllTodoStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#0F1113',
        },
        headerTintColor:'#cfcfcf',
        headerTitleStyle:{
            fontFamily: 'Ubuntu-Bold'
        },
        headerBackTitleStyle:{
            fontFamily:'Ubuntu-Bold'
        }
    }}>
        <AllTodoStack.Screen name="AllTodo" component = { AllTodoScreen}/>
    </AllTodoStack.Navigator>
}

const MainTabNavigator = () => {
    return <MainTabNav.Navigator tabBarOptions={{
            showLabel: false, 
          }}
   
    >
        <MainTabNav.Screen name="HomeTab" component ={HomeStackNavigator} options={{ 
            tabBarIcon: (props)=> (<Icon name="home" color={props.focused ? '#0F1113' : '#9f9fa0'} size={props.focused ? props.size*1.3 : props.size}/>) }}/>
        <MainTabNav.Screen name="AllTodoTab" component={AllTodoStackNavigator}options={{ 
            tabBarIcon: (props)=> (<Icon name="list" color={props.focused ? '#0F1113' : '#9f9fa0'} size={props.focused ? props.size*1.3 : props.size}/>) }}/>
        <MainTabNav.Screen name="ProfileTab" component={ProfileStackNavigator}options={{ 
            tabBarIcon: (props)=> (<Icon name="man" color={props.focused ? '#0F1113' : '#9f9fa0'} size={props.focused ? props.size*1.3 : props.size}/>) }}/>
    </MainTabNav.Navigator>
}

export default MainTabNavigator;