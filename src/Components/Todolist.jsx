import React from 'react'
import { changeTaskTextAC } from '../Redux/toDoListReducer'
import td from './Todolist.module.css'
import Task from './Task'

const Todolist = (props) => {
    const tasks = props.tasks.map(el=>{return(<Task taskText ={el.taskText} taskId={el.taskId} deleteTask={props.deleteTask}/>)})
    const changeText = (elem)=>{
        let txt = elem.target.value
        props.changeTaskText(txt)
    }
    const addTask=()=>{
        props.addTask()
    }
    return(
        <div className={td.todolistBlock}>
            <div className={td.labelBlock}>To Do THIS</div>
            <div className={td.tasksBlock}>
            {tasks}
            <textarea value={props.newTaskText} id="" cols="30" rows="3" onChange={changeText}></textarea>
            <button onClick={addTask}>Add</button>
            </div>
        </div>
    )
}

export default Todolist