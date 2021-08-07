import React, { useContext } from 'react'
import List from './List'
import { DataContext } from './ListProvider'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default function ToDoLists(props) {
    const [toDos, setToDos] = useContext(DataContext)

    const switchComplete = id => {
        const newToDo = [...toDos]
        newToDo.forEach((elem, i) => {
            if (i === id) {
                elem.complete = !elem.complete
            }
        })
        setToDos(newToDo)
    }
    const handleEdit = (editvalue, id) => {
        const newToDo = [...toDos]
        newToDo.forEach((elem, i) => {
            if (id === i) {
                elem.name = editvalue
            }
        })
        setToDos(newToDo)
    }
    function handleDraggend(result){
        if (!result.destination) {
            return;
          }
          const items = reorder(
            toDos,
            result.source.index,
            result.destination.index
          );

          items.forEach((e,i) =>{
            items[i].id = i
          })
          setToDos(items)
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
      };
    return (
        <div>
            <DragDropContext onDragEnd={handleDraggend} onDragEnd={handleDraggend}>
                <Droppable droppableId="characters">
                    {(provided) => (
                        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                toDos.map((elem, i) => (
                                    <List key={i} todo={elem} id={i} switchComplete={switchComplete} setToDos={setToDos} toDos={toDos} checkComplete={switchComplete} handleEdit={handleEdit} />
                                ))
                            }
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}