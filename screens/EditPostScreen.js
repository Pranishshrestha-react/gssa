import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const EditPostScreen= props =>{
    const[title, setTitle] = React.useState('');
    const[description, setDescription] = React.useState('');

    return <View style={{flex:1, paddingHorizontal: 15,backgroundColor:'#9f9fa0'}}>
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
        <Button color="#0F1113" icon="post" mode="contained" style={{marginTop:20}} onPress={()=> (console.log('post added sucessfully'))}>Edit</Button>
        <Button color="#0F1113" icon="cancel" mode="contained" style={{marginTop:10}} onPress={()=> (props.navigation.navigate('MyPost'))}>Cancel</Button>
        </ScrollView>
    </View>

}
 
const styles = StyleSheet.create({

});

export default EditPostScreen;