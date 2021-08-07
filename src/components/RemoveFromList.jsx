import React, { useContext } from 'react'
import { DataContext } from './ListProvider'

export default function RemoveFromList(props) {
    const [toDos, setTodos] = useContext(DataContext)
    const handleDelete = () => {
        const newToDos = toDos.filter(toDos => {
            return toDos.complete === false
        })
        setTodos(newToDos)
    }
    return (
        <div>
            {
                toDos.length === 0 ? <h2>You haven't any doings  - _ -</h2>
                    :
                    <div className='row'>
                        <button id='delete' onClick={handleDelete}>Delete</button>
                    </div>
            }

        </div>
    )
}