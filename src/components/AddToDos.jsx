import React, { useContext, useState } from 'react';
import { DataContext } from './ListProvider'

export default function AddtoDos(props) {
    const [toDos, setToDos] = useContext(DataContext)
    const [todoName, setTodoName] = useState('')

    const addToDo = e => {
        e.preventDefault();
        let id 
        if(!toDos.length) id = 0
        else id = toDos[toDos.length-1].id+1

        setToDos([...toDos, { name: todoName, complete: false, id: id}])
        setTodoName('')
    }
    return (
        <div>
            <h2>Hi! Today you have a <span>{toDos.length}</span> things in your to do list.</h2>
            <form autoComplete='off' onSubmit={addToDo}>
                <input type='text' name='todos' id='todo' required placeholder='Your to do list for done!'
                    value={todoName} onChange={e => setTodoName(e.target.value.toLowerCase())} />
                <button type='submit'>Creat</button>
            </form>
        </div>
    )
}