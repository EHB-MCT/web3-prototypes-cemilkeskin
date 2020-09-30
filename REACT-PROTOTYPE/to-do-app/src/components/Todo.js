import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SidebarData } from './SivebarData'
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import './Todo.css'
import visibilityToggler from './visibilityToggler';
 

function TodoForm({ addTodo }) {
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
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }



function Todo() { 
 
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };

    return (
        <div className="todo-menu"> 
            <div className="todo-menu-container">

            <div className={isActive ? 'inputf-active': null}>
            <input type="text" className="inputf"></input>
            </div>  

                <h1 className="title">My Tasks</h1> 
            
                    <div className='add'>    
                    <FcIcons.FcPlus size="50" onClick={toggleClass}/>   
                   
                </div>
            </div>   
        </div>
    )
}


export default Todo
