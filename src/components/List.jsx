import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd';

export default function List({ todo, i, setToDos, checkComplete, handleEdit, id }) {
    const [onEdit, setOnedit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)

    const handleOnEdit = (e) => {
        setOnedit(true)
    }
    const handleSave = id => {
        setOnedit(false)
        todo.name = editValue
        setListData()
    }

    const checkListItem = (i) => {
        todo.complete = i.target.checked
        setListData()
    }

    const setListData = () => {
        setToDos(todo)
        handleEdit(editValue, id)
    }

    if (onEdit) {
        return (
            <li>
                <input type='text' id={editValue} value={editValue}
                    name='editValue'
                    onChange={e => setEditValue(e.target.value)}
                />
                <button onClick={() => handleSave(i)}>Save</button>
            </li>
        )
    } else {
        return (
            <Draggable key={todo.id} draggableId={todo.id.toString()} index={id}>
                {(provided) => (
                    <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <label htmlFor={i} className={todo.complete === true ? 'active' : ''}>
                            <input type='checkbox' id={i} checked={todo.complete}
                                onChange={(e) => checkListItem(e)} />
                            {todo.name}
                        </label>
                        <button disabled={todo.complete} onClick={handleOnEdit}>Edit</button>
                    </li>
                )}
            </Draggable>
        )
    }

}