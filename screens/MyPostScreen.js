import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext'

const MyPostScreen= props =>{
    const authContext = React.useContext(AuthContext);
    const pressed = () => {
        console.log('it is pressed')
    }

    return <View style={styles.home}>
        <Text style={{color:'#0F1113',fontFamily:'Ubuntu-Bold', fontSize:32}}>My Posts </Text>
        <ScrollView showsVerticalScrollIndicator={false} >
            <Card style={styles.card} onPress={()=> props.navigation.navigate('Post')}>
                <Card.Title title="Card Title" subtitle="Published By" />
                <Card.Content>
                <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button onPress={pressed} icon= {pressed ? 'heart-outline' : 'heart' } color='#0F1113'></Button>
                    <Button onPress={()=> null} icon='comment' color='#0F1113'></Button>
                </Card.Actions>
            </Card>   
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
    }
});

export default MyPostScreen;