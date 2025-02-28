import React from 'react'
import { useState } from 'react';


const TodoInput = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const passTodoToApp = () => {
        if (title) {
            props.addNewTodo({
                id: Date.now(),
                title,
                description,
                completed: false,
            });
            setTitle("");
            setDescription("");
        }
    };


    return (
        <>
            <div className="form-group my-3 w-75">
                <label htmlFor="TaskTitle">Task Title:</label>
                <input type="text" id="TaskTitle" className="form-control mt-1" placeholder="Study React"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className="form-group my-3 w-75">
                <label htmlFor="TaskDescription">Task Title:</label>
                <textarea rows="4" type="text" id="TaskDescription" className="form-control mt-1" placeholder="Study Lesson record and solve the exercises "
                    value={description}
                    onChange={(event) => setDescription(event.target.value)} />
            </div>
            <button className='btn btn-primary w-25 mt-2' onClick={passTodoToApp}>Add Task</button>
        </>
    )
}

export default TodoInput
