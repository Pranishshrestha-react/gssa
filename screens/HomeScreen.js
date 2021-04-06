import React from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import PostContext from '../store/contexts/PostContext';
import AuthContext from '../store/contexts/AuthContext';

const HomeScreen= props =>{
    const postContext = React.useContext(PostContext);
    const [allPosts, setAllPost] = React.useState([]);
    const authContext = React.useContext(AuthContext);
    const pressed = () => {
        console.log(postContext.showPostWithFirebase.data)
    }
    React.useEffect(async() => {
        const everyPost = await postContext.showPostWithFirebase();
        setAllPost(everyPost)
    })

    return <View style={styles.home}>        
        {/* yo tala ko card ma kasari tyo array data lai .map use garera dekhaone??*/}
        <ScrollView>
            {
                allPosts.map(post => {
                    return <Card style={styles.card} onPress={()=> props.navigation.navigate('Post')} key={post.id}>
                         <Card.Title 
                         title={post.title} 
                         subtitle={post.original} />
                <Card.Content>
                <Paragraph>{post.description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={pressed} icon= {pressed ? 'heart-outline' : 'heart' } color='#0F1113'></Button>
                    <Button onPress={()=> null} icon='comment' color='#0F1113'></Button>
                </Card.Actions>
                    </Card>
                })
            }
            {/*<Card style={styles.card} onPress={()=> props.navigation.navigate('Post')}>
                <Card.Title title="titile" subtitle="Published By" />
                <Card.Content>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={pressed} icon= {pressed ? 'heart-outline' : 'heart' } color='#0F1113'></Button>
                    <Button onPress={()=> null} icon='comment' color='#0F1113'></Button>
                </Card.Actions>
        </Card> */}          
            
            <Text style={{color:'#0F1113',fontFamily:'Ubuntu-Bold', fontSize:32}}>Welcome to the HomeScreen page {authContext.authUser.fullName}</Text>
            <Text style={{color:'#0F1113',fontFamily:'Ubuntu-Bold', fontSize:32}}>this is all posts from database</Text>
            <Button color="#0F1113" style={styles.textinput} onPress={()=>{props.navigation.navigate("Profile")}}>Goto Profile</Button>
            <Button color="#0F1113" style={styles.textinput} onPress={()=>{authContext.logOut()}}>LogOut</Button>
            </ScrollView>
    </View>

}
 
const styles = StyleSheet.create({
    home:{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 18,
        backgroundColor:'#9f9fa0',

    },
    textinput:{
        paddingBottom: 20,
        fontFamily: 'Ubuntu-Regular',
    },
    card:{
        marginBottom: 10,
        backgroundColor:'#cfcfcf',
        borderBottomRightRadius:50,
        borderTopLeftRadius: 50,
        elevation:7,
    }
});

export default HomeScreen;