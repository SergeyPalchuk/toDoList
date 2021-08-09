const initialState = {
    tasks:[
        {taskId:1, taskText:'Have a breakfast', taskDone:false},
        {taskId:2, taskText:'Wash my shoes', taskDone:false}
    ],

    newTaskText:''
}
export default initialState;
export const toDoListReducer = (state = initialState, action)=>{
    const stateCopy = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case 'ADD-TASK':
            stateCopy.tasks.push({taskId: stateCopy.tasks[stateCopy.tasks.length-1].taskId+1, taskText:stateCopy.newTaskText, taskDone:false})
            stateCopy.newTaskText = ' '
            break;
        case 'CHANGE-TASK-TEXT':
            stateCopy.newTaskText = action.text
            break;
        case 'TASK-DONE':
            
            break;
        case 'DELETE-TASK':
            if(stateCopy.tasks.length>1){
            stateCopy.tasks.splice(stateCopy.tasks.map(el=>{return el.taskId}).indexOf(action.taskId),1)}
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

export const taskDoneAC = ()=>{
    return{type: 'TASK-DONE'}
}

export const deleteTaskAC = (taskId)=>{
    return{type: 'DELETE-TASK', taskId:taskId}
}