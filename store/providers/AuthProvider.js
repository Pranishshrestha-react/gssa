import React from 'react';
import AuthContext from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL ="https://gssa-a7f27-default-rtdb.firebaseio.com";


class AuthProvider extends React.Component{
    state = {
        isAuthenticated: false ,
        isAuthenticating: false,
        error: false,
        authUser: {}, 
        errorMessage: ''
    };

    componentDidMount = async() => {
        this.setAuthenticating(true);   
        const auth = await AsyncStorage.getItem('authenticated');
        if (!auth) {
            this.setAuthenticated(false)
        } else {
            this.setAuthenticated(true)
            this.setAuthUser(JSON.parse(auth))

        }
        this.setAuthenticating(false) 

    }

    signUpUser = async(user) => {
        try{
            const prevUsers = await AsyncStorage.getItem('users') || JSON.stringify([]);
            const allUsers = JSON.parse(prevUsers);
            const users = [...allUsers, user];
      
            await AsyncStorage.setItem('users', JSON.stringify(users));
        }catch(e) {
            console.log("signup" , e)

        }
    }

    signUpUserWithFirebase = async(user) =>{
        try {
            const userRes = await axios.post(`${BASE_URL}/users.json`, user)
        } catch (error) {
            console.log(error)
        }
    }

    updateUserWithFirebase = async(user) =>{
        try{
            const userRes = await AsyncStorage.getItem('authenticated')
            const finRes = JSON.parse(userRes);
            const updateUser = await axios.patch(`${BASE_URL}/users/${finRes.id}.json`, user)
        } catch(error) {
            console.log('update', error)
        }
    }

    /**addPostWithFirebase = async(post) => {
        try{
            const userRes= await AsyncStorage.getItem('authenticated')
            const finRes = JSON.parse(userRes);
            const userPost = await axios.post(`${BASE_URL}/users/${finRes.id}/posts.json`, post)

            const allPosts = await axios.get(`${BASE_URL}/users/${finRes.id}/posts.json`);
            const postsIds = Object.keys(allPosts.data)
            const posts = postsIds.map(postId => {
                return{
                    ...allPosts.data[postId] ,
                    id: postId
                }
            })
        }
        catch(error) {
            console.log('add_database', error);
        }
    }
   showPostWithFirebase = async(title, description) => {   
        try{       
            const allPosts = await axios.get(`${BASE_URL}/users/${finRes.id}/posts.json`);
            const postsIds = Object.keys(allPosts.data)
            const posts = postsIds.map(postId => {
                return{
                    ...allPosts.data[postId] ,
                    id: postId
                }
            })
            console.log('allusers', posts)

           
        } catch(error){
            console.log('showpost', error)
        }
        
    }
    **/
      


    loginUser = async(email, password) => {
        try{

            const usersRes = await AsyncStorage.getItem('users') || JSON.stringify([]);
            const users = JSON.parse(usersRes);
            const user = users.find(u => u.email == email);

            if(user.email == email && user.password == password) {
                await AsyncStorage.setItem('authenticated', JSON.stringify(user));
                this.setAuthUser(JSON.stringify(user));     
                this.setAuthenticated(true);
            } else {
                this.setAuthenticated(false);
                this.setAuthError(true);
            }
        } catch(e) {
            console.log('second e', e)

        }finally {
            this.setAuthenticating(false)
        }
    }
    loginUserWithFirebase = async(email, password) => {
        try{
            const allUsers = await axios.get(`${BASE_URL}/users.json`);
            const usersIds = Object.keys(allUsers.data)
            const users = usersIds.map(userId => {
                return{
                    ...allUsers.data[userId] ,
                    id: userId
                }
            })
            const loginUser = users.find(user => user.email === email)
            var err ="";
            if (loginUser) {
                if (loginUser.password !== password) {
                    err = "Email and Password did not match";
                    this.setAuthenticated(false);
                } else {
                    await AsyncStorage.setItem('authenticated', JSON.stringify(loginUser));
                    this.setAuthUser(JSON.stringify(loginUser));
                    this.setAuthenticated(true);
                    this.setAuthError(false);
                    this.setState({
                        ...this.state,
                        errorMessage:''
                    })
                     
                }
            } else {
                err = "The given email does not exist";
            }
            this.setState({
                ...this.state,
                errorMessage: err
            })
        } catch (error) {
            console.log(error)
            this.setAuthenticated(false);
            this.setState({
                ...this.state,
                errorMessage: 'Something Went Wrong'
            })
        } finally {
            this.setAuthenticating(false);
        }
    }

    logOut = async() => {
       await AsyncStorage.removeItem('authenticated');
       this.setAuthenticated(false)
       this.setAuthUser({})
       this.setAuthError(false)
       this.setState({
        ...this.state,
        errorMessage: ' '
    })
    }

    setAuthUser = (user) => {
        this.setState({
            ...this.state,
            authUser:user
        })
    }
    
    setAuthenticated = (isAuthenticated) => {
        this.setState({
            ...this.state,
            isAuthenticated
        })
    }

    setAuthenticating = (isAuthenticating) => {
        this.setState({
            ...this.state,
            isAuthenticating
        })
    }

    setAuthError = (error) => {
        this.setState({
            ...this.state,
            error
        })
    }

    render() {
        return(
            <AuthContext.Provider value={{
                ...this.state,
                setAuthUser : this.setAuthUser,
                setAuthError : this.setAuthError,
                setAuthenticated : this.setAuthenticated,
                setAuthenticating : this.setAuthenticating,
                signUpUser: this.signUpUser,
                loginUser: this.loginUser,
                logOut: this.logOut,
                signUpUserWithFirebase: this.signUpUserWithFirebase,
                loginUserWithFirebase: this.loginUserWithFirebase,
                addPostWithFirebase: this.addPostWithFirebase,
                showPostWithFirebase: this.showPostWithFirebase,
                updateUserWithFirebase: this.updateUserWithFirebase,
            }}>
                {this.props.children} 
            </AuthContext.Provider>
        );
    }
}


export default AuthProvider;