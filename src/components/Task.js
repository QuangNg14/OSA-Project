import React from 'react'
import '../Styles/TasksList.css'

const Task = (props) => {
    return (
        <div className='task'>
            This is {props.name}
        </div>
    )
}

export default Task
