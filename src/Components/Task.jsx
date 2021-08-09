import React from 'react'
import ts from './Task.module.css'

const Task = (props)=>{
    const deleteTask = (taskId)=>{
        props.deleteTask(taskId)
    }
    return(
        <div className={ts.taskBlock}>
            <div className={ts.textBlock}>{props.taskText} ID: {props.taskId} <button onClick={()=>deleteTask(props.taskId)}>X</button></div>
            <div></div>
        </div>
    )
}

export default Task