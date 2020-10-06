import React, {useState, useEffect} from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SidebarData } from './SivebarData'
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc'; 
import * as BiIcons from 'react-icons/bi';
import './Todo.css';
import Record from './Record.js';
import visibilityToggler from './visibilityToggler';
import MicRecorder from 'mic-recorder-to-mp3';

function TodoShow({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo-border" style={{ backgroundColor: todo.url ? "#191919" : "#272727" }}>
       <div
      className="todo" 
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >

      {/* if todo.url is true then make audio else do todo.text */} 
      {todo.url ? <Audio audioUrl={todo.url}/> : todo.text}

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

function Audio(audio){
  return(
    <audio src={audio.audioUrl} controls="controls" />
  )
}

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

  const Mp3Recorder = new MicRecorder({ bitRate: 128 });



  // let state = { 
  //   isRecording: false,
  //   blobURL: '',
  //   isBlocked: false,
  // }

const pushAudio = (audio) => {
  const newTodos = [...todos, {type: 'audio', url:audio, isCompleted: false}]
  setTodos(newTodos);
}

//   navigator.getUserMedia({ audio: true },
//     () => {
//       console.log('Permission Granted');
//       this.setState({ isBlocked: false });
//     },
//     () => {
//       console.log('Permission Denied');  
//       this.setState({ isBlocked: true }) 
//     }
//  ).then(()=> {}, (err)=> console.error(err));

navigator.getUserMedia = ( navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || 
  navigator.msGetUserMedia); 

  const addTodo = text => {
    const newTodos = [...todos, { text: text, isCompleted: false, type: 'text' }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }; 

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
useEffect(() => {
  console.log(todos);
}, [todos]);
    const [isActive, setActive] = useState(true);

    const toggleClass = () => {
      setActive(!isActive); 
    };


  //  function Start() {

  //   console.log("started");
  //     if (state.isBlocked) {
  //       console.log('Permission Denied');
  //     } else {
  //       Mp3Recorder
  //         .start()
  //         .then(() => {
  //           setState({ isRecording: true });
  //         }).catch((e) => console.error(e));
  //     }
  //   };
  
  //   function Stop() {

  //     console.log("stopped");
  //     Mp3Recorder 
  //       .stop() 
  //       .getMp3()
  //       .then(([buffer, blob]) => {
  //         const blobURL = URL.createObjectURL(blob)
  //         setState({ blobURL, isRecording: false });
  //       }).catch((e) => console.log(e));
  //   };
  


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

                <Record sendDataBack ={pushAudio}></Record>

                     {/* <div className="stop"> 
                     <FaIcons.FaStopCircle size="50"  onClick={Start()} disabled={!state.isRecording}/>   
                </div> 

                <div className="start"> 
                     <FaIcons.FaPlayCircle size="50" onClick={Stop()} disabled={state.isRecording}/>   
                </div> 

                <audio src={state.blobURL} controls="controls" /> */}

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
 