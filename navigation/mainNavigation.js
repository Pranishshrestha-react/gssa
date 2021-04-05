import React from 'react';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator}  from '@react-navigation/bottom-tabs';
import {Image} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AllTodoScreen from '../screens/AllTodoScreen';
import Icon from 'react-native-vector-icons/Ionicons'; 
import PostScreen from '../screens/PostScreen';
import AddPostScreen from '../screens/AddPostScreen';
import MyPostScreen from '../screens/MyPostScreen';
import EditPostScreen from '../screens/EditPostScreen';
import AddTodo from '../screens/AddTodoScreen';

const Logo =() => {
    return <Image source={require('../assets/logo.png')} style={{height: 50, width: 50}}/>
}
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
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
            backgroundColor: '#0F1113',
        },

        headerTintColor:'#cfcfcf',
        headerTitleStyle:{
            fontFamily: 'Ubuntu-Bold'
        },
        headerBackTitleStyle:{
            fontFamily:'Ubuntu-Bold'
        },
        headerLayoutPreset: 'center',
        }}
        headerMode="float"
        animation="fade"
        >

        <HomeStack.Screen name="Home" component = { HomeScreen} options={({navigation}) => ({
            headerRight: props => (
                <Icon name="add" size={32} color='#cfcfcf' onPress = {()=> navigation.navigate('AddPost')}/>
            ),
            
            
        })} />
        <HomeStack.Screen name="Post" component = { PostScreen}/>
        <HomeStack.Screen name="AddPost" component={ AddPostScreen}/>
        <HomeStack.Screen name="Profile" component = { ProfileScreen}/>
        <HomeStack.Screen name="MyPost" component={MyPostScreen} options={({navigation})=> ({
            headerRight: props =>(
                <Icon name="cut" size={32} color='#cfcfcf' onPress = {()=> navigation.navigate('EditPost')}/>
            )
        })}/>
        <HomeStack.Screen name="EditPost" component={EditPostScreen}/>

        
    </HomeStack.Navigator>
}
const ProfileStackNavigator =() => {
    return <ProfileStack.Navigator screenOptions={{
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
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
    }}
    headerMode="float"
    animation="fade"
    >
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
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
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
    }}
    headerMode="float"
    animation="fade"
    >
        <AllTodoStack.Screen name="AllTodo" component = { AllTodoScreen} options={({navigation}) => ({
            headerRight: props => (
                <Icon name="add" size={32} color="#cfcfcf" onPress = {() => navigation.navigate('AddTodo')}/>
            )
        })}/>
        <AllTodoStack.Screen name="AddTodo" component={AddTodo }/>
    </AllTodoStack.Navigator>
}

const MainTabNavigator = () => {
    return <MainTabNav.Navigator tabBarOptions={{
            showLabel: false, 
            style:{
                backgroundColor:'#0f1113',
            }
          }}
   
    >
        <MainTabNav.Screen name="HomeTab" component ={HomeStackNavigator} options={{ 
            tabBarIcon: (props)=> (<Icon name="home" color={props.focused ? '#cfcfcf' : '#6f7071'} size={props.focused ? props.size*1.3 : props.size}/>) }}/>
        <MainTabNav.Screen name="AllTodoTab" component={AllTodoStackNavigator}options={{ 
            tabBarIcon: (props)=> (<Icon name="list" color={props.focused ? '#cfcfcf' : '#6f7071'} size={props.focused ? props.size*1.3 : props.size}/>) }}/>
        <MainTabNav.Screen name="ProfileTab" component={ProfileStackNavigator}options={{ 
            tabBarIcon: (props)=> (<Icon name="man" color={props.focused ? '#cfcfcf' : '#6f7071'} size={props.focused ? props.size*1.3 : props.size}/>) }}/>
    </MainTabNav.Navigator>
}

export default MainTabNavigator;