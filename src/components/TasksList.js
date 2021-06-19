import React, { useState } from 'react'
import Task from './Task'
import '../Styles/TasksList.css'

const TasksList = () => {
    const [taskname, setTaskname] = useState("")
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "task1",
            finished: false
        },
        {
            id: 2,
            name: "task2",
            finished: false
        },
        {
            id: 3,
            name: "task3",
            finished: false
        },
    ])

    const handleChange = (e) => {
        setTaskname(e.target.value)
    }
    
    // called when Add button is pressed
    const handleAddingTask = () => {
        const newTask = {
            id: tasks.length + 1,
            name: taskname,
            finished: false
        }
        
        // adding new task to tasks list (state variable)
        setTasks([...tasks, newTask])
        setTaskname("") 
        
        // let copyTasks = tasks
        // copyTasks.push(newTask)
        // setTasks(copyTasks)
    }

    // called when delete button is pressed
    const handleDelete = (deleteId) => {
        const updated_list = tasks.filter((task) => task.id != deleteId)
        setTasks(updated_list)
    }

    const handleUpdate = (updateId, updateName) => {
        const updateTaskIndex = tasks.findIndex((task) => task.id == updateId)
        const newTasks = [...tasks] //deep copy
        console.log(newTasks[updateTaskIndex])
        newTasks[updateTaskIndex].name = updateName
        setTasks(newTasks)
    }
    return (
        <div>
            {/* Title */}
            <h1 className='title'>Task Tracker</h1>
            
            <h2>Adding new task</h2>
            {/* Input */}
            <input value={taskname} type="text" onChange={handleChange}/>
            {/* Add Button */}
            <button onClick={handleAddingTask}>
                Add
            </button>

            {/* { a ? b : c  } */}

            {/* {if (a) {
                b
            }else{
                c
            }} */}


            <h2>Tasks List</h2>
            <div className="task-container">  
                {/* for task in tasks: */}
                {tasks.map(
                    (task) => {
                    return (
                        <Task 
                            id={task.id} 
                            name={task.name}
                            handleDelete={() => handleDelete(task.id)}
                            handleUpdate={handleUpdate}
                            />
                    )
                })
                }
            </div>
        </div>
    )
}

export default TasksList
