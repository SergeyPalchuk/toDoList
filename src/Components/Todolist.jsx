import React from 'react'
import td from './Todolist.module.css'

const Todolist = (props) => {
    return(
        <div className={td.todolistBlock}>
            {props.tasks}
        </div>
    )
}

export default Todolist