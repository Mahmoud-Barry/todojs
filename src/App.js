import React, { useState } from "react";
import './App.css';
import Form from './components/Form';
import Todo from "./components/Todo";
function App() {

  const [tasks, setTasks] = useState('');

  // const taskList = tasks.map(task => (
  //   <Todo
  //       id={task.id}
  //       name={task.name}
  //       completed={task.completed}
  //       key={task.id}
  //     />
  //   )
  // );
  function addTask(name) {
    const newTask = { id: "id", name: name, completed: false };
    setTasks([...tasks, newTask]);
    console.log(name);
  }
  return (
    <div>
      <Form addTask={ addTask }/>
      <Todo />
    </div>
  );
}

export default App;
