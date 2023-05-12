import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  const day = new Date().toLocaleString("default", {
    weekday: "long",
  });
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>{setToDo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{setToDos([...toDos,{id:Date.now(), text:toDo,status:false}])}} className="fas fa-plus"></i>
      </div>
     
     
      <div className="todos">
  {toDos.map((todo, index) => (
    <div key={todo.id} className="todo">
      <div className="left">
        <input
          type="checkbox"
          checked={todo.status}
          onChange={() => {
            setToDos(
              toDos.map((t, i) => {
                if (i === index) {
                  return { ...t, status: !t.status };
                }
                return t;
              })
            );
          }}
        />
        <p>{todo.text}</p>
        
      </div>
      <div className="left">
          {todo.status && <p id='completed'>completed</p> }
          </div>
      <div className="right">
        <i
          onClick={() => {
            setToDos([...toDos.slice(0, index), ...toDos.slice(index + 1)]);
          }}
          className="fas fa-times"
        ></i>
 
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default App;