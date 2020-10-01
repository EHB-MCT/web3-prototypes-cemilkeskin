import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SidebarData } from './SivebarData'
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import * as TiIcons from 'react-icons/ti';
import './Todo.css'
import visibilityToggler from './visibilityToggler';
  

function TodoShow({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo-border">
       <div
      className="todo" 
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div className="buttons">

      <div className="checkbutton">
        <AiIcons.AiFillCheckCircle size="30" onClick={() => completeTodo(index)} style={{ color: todo.isCompleted ? "gray" : "green" }}/>  
      </div>
      <div className="deletebutton"> 
        <AiIcons.AiFillCloseCircle size="30" onClick={() => removeTodo(index)}/>  
      </div>
      </div>

    </div>
    </div>
  );  
};

function TodoAdd({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="inputf"
        placeholder="Type your task..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}




function Todo() { 
 
  const [todos, setTodos] = React.useState([]); 

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }; 

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  

    const [isActive, setActive] = useState(true);

    const toggleClass = () => {
      setActive(!isActive); 
    };



    return (
        <div className="todo-menu"> 
            <div className="todo-menu-container">

            <div className={isActive ? 'inputf-active': null}>
            <TodoAdd addTodo={addTodo} />
            
            </div>  

                <h1 className="title">My Tasks</h1> 
            
                    <div className='add'>     
                    <FcIcons.FcPlus size="50" onClick={toggleClass}/>   
                   
                </div> 

<div className="todo-info">  
  <h3 className="todo-text"> Press on the plus button to add a task.</h3>
</div>
              
          <div className="todo-list">
              {todos.map((todo, index) => (

             <TodoShow
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo} 
            /> 
        ))} 
        
      </div>
 
            </div>   
        </div>
    )
}


export default Todo
