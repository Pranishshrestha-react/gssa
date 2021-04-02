import React from 'react';
import PostContext from '../contexts/PostContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL ="https://gssa-a7f27-default-rtdb.firebaseio.com";

class PostProvider extends React.Component{
    state = {
        post:{},    
    }

    setPost =(post) => {
        this.setState({
            ...this.state,
            post
        })
    }
    setTitle = (title) => {
        this.setState({
            ...this.state,
            title
        })
    }
    setDescription =(description) => {
        this.setState({
            ...this.state,
            description
        })
    }
    setOriginal = (original) => {
        this.setState({
            ...this.state,
            original
        })
    }


    addPostWithFirebase= async(post) => {
        try{
            const addPost = await axios.post (`${BASE_URL}/posts.json`, post)
           

        } catch(error) {
            console.log ('addpost', error)
        }
    }
    /**yo tala ko maile data haru database bata tanera array ma banaye hai aba yo tala ko lai kasari HomeScreen ma gayera dekhaone sabai array tyo card banako ma?? */
    showPostWithFirebase = async() => {
        const allPosts = await axios.get(`${BASE_URL}/posts.json`);
        const userIds = Object.keys(allPosts.data);
        const posts = userIds.map(userId => {
            return{
                ...allPosts.data[userId],
                id: userId
                }
            
            })
            console.log('before', posts)
        /**const allDisplay = posts.map(post => {
            return{
                ...this.state,
                post
            }
        })
    console.log('final',allDisplay)
        console.log(this.setPost(JSON.stringify(posts)))**/
    }


    render() {
        return(
            <PostContext.Provider value={{
                ...this.state,
                setTitle: this.setTitle,
                setDescription :this.setDescription,
                setOriginal: this.setOriginal,
                addPostWithFirebase: this.addPostWithFirebase,
                setPost: this.setPost,
                showPostWithFirebase: this.showPostWithFirebase,
            }}>
                {this.props.children}
            </PostContext.Provider>
        );
    }

}

export default PostProvider;