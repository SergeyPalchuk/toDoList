import React from 'react'
import ts from './Task.module.css'

const Task = (props)=>{
    return(
        <div className={ts.taskBlock}>
            <div className={ts.textBlock}>{props.taskText}</div>
            <div></div>
        </div>
    )
}

export default Task