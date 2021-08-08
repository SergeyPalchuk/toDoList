const initialState = {
    tasks:[
        {taskId:1, taskText:'Have a breakfast'},
        {taskId:2, taskText:'Wash my shoes'}
    ],

    newTaskText:''
}

export const toDoListReducer = (state = initialState, action)=>{
    const stateCopy = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case 'ADD-TASK':
            stateCopy.tasks.push({taskId: stateCopy.tasks[stateCopy.tasks.length-1].taskId+1, taskText:stateCopy.newTaskText})
            stateCopy.newTaskText = ''
            break;
        case 'CHANGE-TASK-TEXT':
            stateCopy.newTaskText = action.text
            break;
    }


    return stateCopy
}

export const addTaskAC=()=>{ //AC - action creator
    return {type:'ADD-TASK'}
}

export const changeTaskTextAC=(text)=>{
    return {type: 'CHANGE-TASK-TEXT', text:text}
}