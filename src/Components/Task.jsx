import React from 'react'
import ts from './Todolist.module.css'

const Task = (props)=>{
    return(
        <div>
            <div className={ts.textBlock}>{props.taskText}</div>
            <div></div>
        </div>
    )
}

export default Task