import React from 'react'
import AddtoDos from './components/AddToDos';
import ToDoLists from './components/ToDoLists';
import RemoveFromList from './components/RemoveFromList';
import { ListProvider } from './components/ListProvider';

function App() {
  return (
    <ListProvider>
      <div className="App">
        <header className="App-header">
          <h1 className='main-title-fm'>To Do List</h1>
        </header>
        <AddtoDos />
        <ToDoLists />
        <RemoveFromList />
      </div>
    </ListProvider>
  );
}

export default App;
