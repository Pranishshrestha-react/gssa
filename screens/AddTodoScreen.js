import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import TodoContext from '../store/contexts/TodoContext';


const AddTodo= props =>{
    const [data, setData] = React.useState('');
    const [todoTitle, setTodoTitle] = React.useState('');
    const [todoDescription, setTodoDescription] = React.useState('');
    const todoContext = React.useContext(TodoContext);
    React.useEffect(()=> {
        const todoRes = todoContext.pullTodoFromFirebase();
        //setData(todoRes.data);
        console.log('did', todoRes)
    },[]
    )
   //console.log('homescreen',data)
    const todoSubmit = () => {
        todoContext.addTodoToFirebase({todoTitle, todoDescription})
       
        props.navigation.navigate("AllTodo")
    }
    return <View style={styles.home}>
            <ScrollView>
        <Text style={styles.just}>JUST DO IT!</Text>
        <View style={styles.textBox}>
            <TextInput
                style={styles.inputbox}
                mode="flat"
                label="Title"
                value={todoTitle}
                onChangeText={text => setTodoTitle(text)}
                right={<TextInput.Icon name="text-box-plus"/>}
                autoCapitalize="words"
                />
            <TextInput
                style={styles.inputbox}
                mode="flat"
                label="Description"
                value={todoDescription}
                multiline
                numberOfLines={2}
                maxLength={40}
                onChangeText={text => setTodoDescription(text)}
                right={<TextInput.Icon name="air-filter"/>}
                inlineImageLeft="search"
                />
        </View>
        <Button mode="contained" color="#0F1113" style={styles.button} icon="post" onPress={todoSubmit}>Save</Button>
        <Button mode="contained" color="#0F1113" style={styles.button} icon ="cancel" onPress={()=> props.navigation.navigate("AllTodo")}>Cancel</Button>

    </ScrollView>
    </View>

}
 
const styles = StyleSheet.create({
    home:{
        flex: 1,
        backgroundColor:'#9f9fa0',
    },
    just:{
        width: '100%',
        fontSize: 50,
        fontFamily:'Ubuntu-Bold',
        paddingLeft:30,
        elevation:4,
    },
    textBox:{
        marginHorizontal:20,
        marginVertical:10,
    },
    inputbox:{
        marginBottom:5,
    },
    button:{
        marginHorizontal:20,
        marginVertical:5,
    },
});

export default AddTodo;