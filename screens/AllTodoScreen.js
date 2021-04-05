import React from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import {Switch} from 'react-native-paper';

import TodoContext from '../store/contexts/TodoContext';

const AllTodoScreen = props => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const todoContext = React.useContext(TodoContext);
  const [myTodos, setMyTodos] = React.useState([]);

  React.useEffect(async () => {
    const fetchedTodos = await todoContext.pullTodoFromFirebase();
    //const myList = Object.values(fetchedTodos)
    console.log('mylist')
    setMyTodos(fetchedTodos)
   // setMyTodos(Object.keys(todoId => fetchedTodos[todoId]));

  },[] );

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
      <View style={{flex: 1, backgroundColor: '#9f9fa0', paddingHorizontal: 18}}>
        <FlatList>
          {myTodos.map(todo => {
              return <View style={styles.bodyTodo}>
                <View>
                    <Text style={{fontSize: 20}}>{todo.todoTitle}</Text>
                    <Text style={{color: '#575859', width: 250}}>{todo.todoDescription}</Text>
                </View>
                    <Switch
                    style={{right: 7}}
                    value={isSwitchOn}
                    color="black"
                    onValueChange={onToggleSwitch}
                    />
                </View>
          })}
          </FlatList>
       
      {/*<ScrollView>
        <View style={styles.bodyTodo}>
          <View>
            <Text style={{fontSize: 20}}>Title of Todo</Text>
            <Text style={{color: '#575859', width: 250}}>
              Descriptionsdf;alsjdf;asldjfasl;
            </Text>
          </View>
          <Switch
            style={{right: 7}}
            value={isSwitchOn}
            color="black"
            onValueChange={onToggleSwitch}
          />
        </View>

        
        </ScrollView>*/}
        <ScrollView>
        {myTodos.map(todo => {
              return <View style={styles.bodyTodo}>
              <View>
                  <Text style={{fontSize: 20}}>{todo.todoTitle}</Text>
                  <Text style={{color: '#575859', width: 250}}>{todo.todoDescription}</Text>
              </View>
                  <Switch
                  style={{right: 7}}
                  value={isSwitchOn}
                  color="black"
                  onValueChange={onToggleSwitch}
                  />
              </View>
        })}
        </ScrollView>


    </View>
    
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#9f9fa0',
  },
  bodyTodo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#cfcfcf',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 5,
    paddingLeft: 25,
    elevation: 10,
  },
});

export default AllTodoScreen;