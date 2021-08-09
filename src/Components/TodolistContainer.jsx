import { connect } from "react-redux"
import Todolist from "./Todolist"
import Task from './Task'
import {addTaskAC,changeTaskTextAC, deleteTaskAC } from './../Redux/toDoListReducer'
import { toDoListReducer } from "./../Redux/toDoListReducer"
import initialState from './../Redux/toDoListReducer'


const deleteTask=(taskId)=>{
    toDoListReducer( initialState, deleteTaskAC(taskId))
    alert(initialState.tasks)
}
const mapStateToProps=(state)=>{

    return({
        todolist:state.todolist,
        tasks: state.todolist.tasks,
        newTaskText: state.todolist.newTaskText

    })
}

const mapDispatcherToProps = (dispatch)=>{
    return({
        addTask:()=>dispatch(addTaskAC()),
        changeTaskText:(text)=> dispatch(changeTaskTextAC(text)),
        deleteTask:(taskId)=>dispatch(deleteTaskAC(taskId))
    })
}

const TodolistContainer = connect(mapStateToProps, mapDispatcherToProps)(Todolist)
export default TodolistContainer;