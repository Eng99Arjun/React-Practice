import { useState } from 'react'


function App() {
  const [description, setDescription] = useState("");
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);


  const addTodo =() => {
    if(!input.trim()) return;
    const newTodo = {id: Date.now(), text: input.trim(), description: description.trim(), completed: false};
    setTodos([newTodo, ...todos]);
    setInput('');
    setDescription('');
  }

  return (
    <div>
      <input type="text"
        placeholder='Enter a Task'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
      <input type="text"
        placeholder='Enter description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>

        <div>
          {todos.map((todo) => (
            <h3>{todo.text}</h3>
          ))}
        </div>
    </div>
  )
}

export default App
