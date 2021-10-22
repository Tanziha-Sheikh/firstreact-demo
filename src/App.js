import react from 'react'
import Todo from './components/Todo';
import Demo from './components/Demo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' /><br />
       <Todo text='Learn React again' />
       <Demo/>
    </div>
  );
}

export default App;