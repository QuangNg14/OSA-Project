import React, { useState } from 'react'
import '../Styles/TasksList.css'

const Task = (props) => {
    const [newTaskname, setNewTaskname] = useState("")
    const [toggleUpdate, setToggleUpdate] = useState(false)
    // !toggleUpdate = not toggleUpdate
    return (
        <div className='task'>
            {props.name}
            <button onClick={props.handleDelete}>Delete</button>
            <button onClick={() => setToggleUpdate(!toggleUpdate)}>Update</button>
            { toggleUpdate ? (
                <>
                    <input value={newTaskname} type="text" onChange={(e) => setNewTaskname(e.target.value)}/>
                    <button onClick={() => props.handleUpdate(props.id, newTaskname)}>Save Update</button>
                </>
            ) : null}
        </div>
    )
}

export default Task