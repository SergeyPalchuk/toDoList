import { connect } from "react-redux"
import Todolist from "./Todolist"
import Task from './Task'
import {addTaskAC,changeTaskTextAC } from './../Redux/toDoListReducer'

const mapStateToProps=(state)=>{
    
    return({
        todolist:state.todolist,
        
        tasks: state.todolist.tasks.map(el=>{return(<Task taskText ={el.taskText}/>)})
    })
}

const mapDispatcherToProps = (dispatch)=>{
    return({
        addTask:()=>dispatch(addTaskAC()),
        changeTaskText:(text)=> dispatch(changeTaskTextAC(text))
    })
}

const TodolistContainer = connect(mapStateToProps, mapDispatcherToProps)(Todolist)
export default TodolistContainer;