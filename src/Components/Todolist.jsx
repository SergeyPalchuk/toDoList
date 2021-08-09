import React from 'react'
import { changeTaskTextAC } from '../Redux/toDoListReducer'
import td from './Todolist.module.css'

const Todolist = (props) => {
    const changeText = (elem)=>{
        let txt = elem.target.value
        props.changeTaskText(txt)
    }
    const addTask=()=>{
        props.addTask()
    }
    return(
        <div className={td.todolistBlock}>
            <div className={td.labelBlock}></div>
            <div className={td.tasksBlock}>
            {props.tasks}
            <textarea value={props.newTaskText} id="" cols="30" rows="3" onChange={changeText}></textarea>
            <button onClick={addTask}>Add</button>
            </div>
        </div>
    )
}

export default Todolist