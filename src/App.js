import React, {useState} from "react";
import TodosList from './todos/TodosList';
import AddTodosItem from "./todos/AddTodosItem";
import arrowDown from "./arrowDown.svg"


function App() {
  const [todos, setTodos] = useState([
    {id: 1, isCompleted: false, title: 'go to shop'},
    {id: 2, isCompleted: true, title: 'go to home'},
  ]);

  const [buttonState, setButtonState] = useState(()=>(item)=>true)

  function switchTodoComplete(todoIdState){
    setTodos(todos.map((item) => {
      if(item.id === todoIdState){
        item.isCompleted = !item.isCompleted;
      }
      return item;
    }))
  }
  
  function addTodoInTodosList(textTitle){
    setTodos([...todos, {id: todos.length+1, isCompleted: false, title: textTitle}]);
  }

  function countCompletedTodos(){
    let sumOfCompletedTodos = 0;
    todos.forEach((item)=>{
      sumOfCompletedTodos += !!item.isCompleted; 
    });

    return sumOfCompletedTodos;
  }

  function deleteCompletedTodos(){
    setTodos(todos.filter((item)=>!item.isCompleted).map((item, index)=>{
      item.id = index+1;
      return item;
    }));
  }

  function sortButtonsStyleEvent(event){
    if(event.target.tagName!=='DIV' && event.target.tagName!=='P'){
      event.target.parentNode.childNodes.forEach((item)=>{item.setAttribute('style', '')})
      event.target.setAttribute('style', 'border: 1px solid black; border-radius: 4px;');
    }
  }

  return (
    <div className="wrapper">
      <p className="title">todos</p>
      <div className="addTodosItem">
        <img src={arrowDown}/>
        <AddTodosItem addTodoInTodosList={addTodoInTodosList}/>
      </div>
      <TodosList todos={todos} switchTodoComplete={switchTodoComplete} buttonState={buttonState}/>
      <div className="infoMenu" onClick={sortButtonsStyleEvent}>
        <p>{(countCompletedTodos() !== todos.length) ? todos.length - countCompletedTodos() +' items left!' : 'All is done!'}</p>
        <div className="SortButtons"> 
          <button style={{border: '1px solid black', borderRadius: '4px'}} onClick={()=>setButtonState(()=>()=>true)}>All</button>
          <button onClick={()=>setButtonState(()=>itemState=>!itemState)}>Active</button>
          <button onClick={()=>setButtonState(()=>itemState=>itemState)}>Completed</button>
        </div>
        <button onClick={()=>deleteCompletedTodos()}>Clear completed</button>
      </div>
    </div>
  );
}

export default App;
