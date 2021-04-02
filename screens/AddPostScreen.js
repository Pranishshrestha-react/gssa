import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import PostContext from '../store/contexts/PostContext';

const AddPostScreen= props =>{
    const[title, setTitle] = React.useState('');
    const[description, setDescription] = React.useState('');
    const[original, setOriginal] = React.useState('');
    const postContext = React.useContext(PostContext);
    const handlePost=() => {
        postContext.addPostWithFirebase({title, description, original})
        postContext.showPostWithFirebase({title, description, original})
        props.navigation.navigate('Home')
    }
    return <View style={{flex:1, paddingHorizontal: 15}}>
        <Text style={{color:'#0F1113',fontFamily:'Ubuntu-Bold', fontSize:32, paddingBottom: 20, paddingLeft: 50}}>Fill the Boxes </Text>
        <ScrollView showsHorizontalScrollIndicator={false}>
        <TextInput
            mode="outlined"
            label="Title"
            value={title}
            onChangeText={text => setTitle(text)}
        />
        <TextInput
            mode="outlined"
            label="Description"
            value={description}
            onChangeText={text => setDescription(text)}
            multiline
            numberOfLines= {4}
        />
         <TextInput
            mode="outlined"
            label="Created By"
            value={original}
            onChangeText={text => setOriginal(text)}
        />
        <Button color="#0F1113" icon="post" mode="contained" style={{marginTop:20}} onPress={handlePost}>Post</Button>
        <Button color="#0F1113" icon="cancel" mode="contained" style={{marginTop:10}} onPress={()=> (props.navigation.navigate('Home'))}>Cancel</Button>
        </ScrollView>
    </View>

}
 
const styles = StyleSheet.create({

});

export default AddPostScreen;