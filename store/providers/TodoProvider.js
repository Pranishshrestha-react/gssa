import React from 'react';
import TodoContext from '../contexts/TodoContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL ="https://gssa-a7f27-default-rtdb.firebaseio.com";

class TodoProvider extends React.Component{
    state = {
        todo:{},
        isComplete: false,
    }


    setCompleted = (isComplete) => {
        this.setState({
            ...this.state,
            isComplete
        })
    }
    setTodo =(todo) => {
        this.setState({
            ...this.state,
            todo
        })
    }
    addTodoToFirebase = async(todo) => {
        try{
            const todoRes = await axios.post(`${BASE_URL}/todos.json`, todo)
        } catch(error){
            console.log('postTodo', error)
        }
    }
    pullTodoFromFirebase = async() => {
        try{
            const todoRes = await axios.get(`${BASE_URL}/todos.json`);
            const todosKeys = Object.keys(todoRes.data)
            const todos = todosKeys.map(todoKey => {
                return{
                    ...todoRes.data[todoKey],
                    id: todoKey
                }
            })
            //console.log('new', todos)
        } catch(error){
            console.log('todoarray', error)
        }
    }

    render(){
        return(
            <TodoContext.Provider value={{
                ...this.state,
                setCompleted: this.setCompleted,
                setTodo: this.setTodo,
                addTodoToFirebase: this.addTodoToFirebase,
                pullTodoFromFirebase: this.pullTodoFromFirebase,
            }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }

}

export default TodoProvider;