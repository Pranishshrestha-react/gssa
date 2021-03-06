

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './navigation/mainNavigation';
import AuthStackNavigator from './navigation/authNavigation';
import AuthProvider from './store/providers/AuthProvider';
import AuthContext from './store/contexts/AuthContext';
import SplashScreen from './screens/splash';
import MainTabNavigator from './navigation/mainNavigation';
import PostProvider from './store/providers/PostProvider';
import TodoProvider from './store/providers/TodoProvider';




const App = () => {
 
  return (
    <AuthProvider>
      <PostProvider>
        <TodoProvider>
      <PaperProvider>
        <NavigationContainer>
         <AuthContext.Consumer>
            {
              (context) => {
                if (context.isAuthenticating) {
                  return <SplashScreen/>
                }
                return !context.isAuthenticated ? <AuthStackNavigator/> : <MainTabNavigator/>
              }
            }
         </AuthContext.Consumer>
        </NavigationContainer>
      </PaperProvider>
      </TodoProvider>
      </PostProvider>
    </AuthProvider>
  )
}

export default App;
