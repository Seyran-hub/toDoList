import React, {useState, useEffect, createContext} from 'react'
export const DataContext = createContext();
export const ListProvider = (props) => {
    const [toDos,setToDos] = useState([])

    useEffect(() =>{
        const todoStore=JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setToDos(todoStore)
    },[])
    useEffect(() =>{
        localStorage.setItem('todoStore', JSON.stringify(toDos))
    },[toDos])
    
    return(
        <DataContext.Provider value={[toDos,setToDos ]}>
            {props.children}
        </DataContext.Provider>
    )
}